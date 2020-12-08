import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { transitions } from 'polished';
import { ImQrcode } from 'react-icons/im';

import { CHECK_IN_USER } from '../reducers/users';

const Main = styled.section`
  position: relative;
  background-color: ${(p) => p.theme.milk};

  &::before {
    content: '';
    position: fixed;
    top: 0;
    width: 100vw;
    height: 60vh;
    background-color: #006fe3;
    border-radius: 0 0 60% 30%;
    z-index: 0;
    ${transitions('all 1s ease-out')};
  }

  &.checked {
    .title {
      top: 35vh;

      h4 {
        opacity: 0.8;
      }
    }

    &::before {
      height: 150vh;
      border-radius: 0 0 35% 20%;
    }
  }

  .title {
    position: absolute;
    top: 2.5vh;
    text-align: center;
    ${transitions('top 0.6s ease-in-out')};

    h1 {
      margin: 0;
      font-size: 1.65rem;
      font-weight: bold;
      color: ${(p) => p.theme.white};
      z-index: 1;
    }

    h3 {
      margin: 0;
      font-size: 1.35rem;
      color: ${(p) => p.theme.white};
      z-index: 1;
      ${transitions('opacity 0.6s ease-in-out')};
    }
  }
`;

const Form = styled.div`
  overflow: hidden;
  margin-top: 18vh;
  padding: 1rem 1.5rem 0;
  width: 85%;
  color: ${(p) => p.theme.dark};
  background-color: ${(p) => p.theme.white};
  border-radius: 0.25rem;
  z-index: 1;
  ${transitions('all 0.6s ease-out')};

  &.checked {
    transform: scale(0.5) rotate(10deg);
    opacity: 0;
  }

  h2 {
    margin: 0;
  }

  h4 {
    margin: 0;
    font-weight: normal;
    color: ${(p) => p.theme.gray};
  }
`;

const Version = styled.div`
  position: fixed;
  bottom: 0.5rem;
  width: 100%;
  text-align: center;
  color: ${(p) => p.theme.gray};
  ${transitions('all 1s ease-out')};

  b {
    margin: 0 0.5rem;
  }

  a {
    text-decoration: none;
    color: ${(p) => p.theme.gray};
    ${transitions('color 1s ease-out')};
  }

  &.checked {
    color: ${(p) => p.theme.white};
    opacity: 0.6;

    a {
      color: ${(p) => p.theme.white};
    }
  }
`;

const initialMessage = {
  title: '109學年度國中小學校長',
  sub: '科技體驗研習講座',
};

const doneMessage = {
  title: '完成簽到',
  sub: '您可以安心關閉本視窗',
};

function CheckIn() {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [message, setMessage] = useState(initialMessage);
  const [icon, setIcon] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (name && school) {
      dispatch({ type: CHECK_IN_USER, payload: { name, school } });
      setIcon('pi-spin pi-spinner');
      setTimeout(() => setIcon('pi-check'), 800);
      setTimeout(() => {
        setName('');
        setIsChecked(true);
        setMessage(doneMessage);
      }, 1200);
    }
  };

  return (
    <Main
      className={`p-d-flex p-flex-column p-ai-center ${
        isChecked ? 'checked' : ''
      }`}
    >
      <div className="title">
        <h1>{message.title}</h1>
        <h3>{message.sub}</h3>
      </div>
      <Form className={`p-d-flex p-flex-column ${isChecked ? 'checked' : ''}`}>
        <h2>線上簽到表</h2>
        <div
          className="p-d-flex p-flex-column p-jc-between p-mt-3 p-pb-3"
          style={{ height: '100%' }}
        >
          <h4>請於下方輸入您的學校名稱：</h4>
          <InputText
            className="p-inputtext-md p-mt-1 p-mb-3"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
          <h4>請於下方輸入您的姓名：</h4>
          <InputText
            className="p-inputtext-md p-mt-1 p-mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            label="送出"
            icon={`pi ${icon}`}
            iconPos="right"
            className="p-button-md p-mt-1"
            onClick={onSubmit}
          />
        </div>
      </Form>
      <Version
        className={`p-d-flex p-ai-center p-jc-center ${
          isChecked ? 'checked' : ''
        }`}
      >
        <Link to="/login" className="p-mr-4">
          線上簽到系統
        </Link>
        <Link to="/qrcode">
          <ImQrcode size="2rem" />
        </Link>
      </Version>
    </Main>
  );
}

export default CheckIn;
