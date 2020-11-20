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
  overflow: hidden;
  background-color: ${(p) => p.theme.milk};

  &::before {
    content: '';
    position: fixed;
    top: 0;
    width: 100vw;
    height: 50vh;
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
    top: 5vh;
    text-align: center;
    user-select: none;
    ${transitions('top 0.6s ease-in-out')};

    h1 {
      margin: 0;
      font-size: 2.25rem;
      font-weight: bold;
      color: ${(p) => p.theme.white};
      z-index: 1;
    }

    h4 {
      margin: 0;
      color: ${(p) => p.theme.white};
      z-index: 1;
      ${transitions('opacity 0.6s ease-in-out')};
    }
  }
`;

const Form = styled.div`
  overflow: hidden;
  margin-top: 25vh;
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
    margin: 0 0 1rem;
    user-select: none;
  }

  h4 {
    margin: 0;
    font-weight: normal;
    color: ${(p) => p.theme.gray};
    user-select: none;
  }
`;

const Version = styled.div`
  position: fixed;
  bottom: 2rem;
  width: 100%;
  text-align: center;
  color: ${(p) => p.theme.gray};
  user-select: none;
  ${transitions('all 1s ease-out')};

  b {
    margin: 0 0.5rem;
  }

  a {
    color: ${(p) => p.theme.gray};
  }

  &.checked {
    color: ${(p) => p.theme.white};
    opacity: 0.6;
  }
`;

function CheckIn() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState({
    title: 'ＯＯＯ講座',
    sub: 'ＸＸＸＸＸＸＸ描述',
  });
  const [icon, setIcon] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (name) {
      dispatch({ type: CHECK_IN_USER, payload: { name } });
      setIcon('pi-spin pi-spinner');
      setTimeout(() => setIcon('pi-check'), 1000);
      setTimeout(() => {
        setName('');
        setIsChecked(true);
        setMessage({ title: '完成簽到', sub: '您可以安心關閉本視窗' });
      }, 1500);
    }
  };

  const onChange = (e) => setName(e.target.value);

  return (
    <Main
      className={`p-d-flex p-flex-column p-ai-center ${
        isChecked ? 'checked' : ''
      }`}
    >
      <div className="title">
        <h1>{message.title}</h1>
        <h4>{message.sub}</h4>
      </div>
      <Form className={`p-d-flex p-flex-column ${isChecked ? 'checked' : ''}`}>
        <h2>線上簽到表</h2>
        <h4>請於下方輸入您的大名：</h4>
        <div
          className="p-d-flex p-flex-column p-jc-between p-mt-3 p-pb-3"
          style={{ height: '100%' }}
        >
          <InputText
            className="p-inputtext-lg p-mb-5"
            value={name}
            onChange={onChange}
          />
          <Button
            label="送出"
            icon={`pi ${icon}`}
            iconPos="right"
            className="p-button-lg"
            onClick={onSubmit}
          />
        </div>
      </Form>
      <Version
        className={`p-d-flex p-ai-center p-jc-center ${
          isChecked ? 'checked' : ''
        }`}
      >
        線上簽到系統
        <b>v1.6.8</b>
        <Link to="/qrcode">
          <ImQrcode size="1.5rem" />
        </Link>
      </Version>
    </Main>
  );
}

export default CheckIn;
