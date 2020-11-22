import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useDispatch, useSelector } from 'react-redux';
import { BiMessageCheck } from 'react-icons/bi';
import { ImQrcode } from 'react-icons/im';

import { LOGIN_AUTH, STORAGE_AUTH } from '../reducers/auth';
import Storage from '../boot/storage';

const Main = styled.section`
  position: relative;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #006fe3;
    z-index: 0;
  }

  .title {
    position: absolute;
    top: 5vh;
    text-align: center;
    user-select: none;
    z-index: 1;

    h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: bold;
      color: ${(p) => p.theme.white};
    }

    h2 {
      margin: 0;
      color: ${(p) => p.theme.white};
    }
  }

  img {
    margin-top: 25vh;
    width: 70%;
    z-index: 1;
  }
`;

const Form = styled.form`
  overflow: hidden;
  margin-top: 25vh;
  padding: 1rem 1.5rem 0;
  width: 85%;
  color: ${(p) => p.theme.dark};
  background-color: ${(p) => p.theme.white};
  border-radius: 0.25rem;
  z-index: 1;
`;

const Version = styled.div`
  position: fixed;
  bottom: 2rem;
  width: 100%;
  text-align: center;
  color: ${(p) => p.theme.white};
  user-select: none;

  b {
    margin: 0 0.5rem;
  }

  a {
    color: ${(p) => p.theme.white};
    text-decoration: none;
  }
`;

function Login() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () =>
    dispatch({ type: LOGIN_AUTH, payload: { username, password } });
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  if (auth) return <Redirect to="/dashboard" />;
  if (Storage.getItem(STORAGE_AUTH)) return null;

  return (
    <Main className="p-d-flex p-flex-column p-ai-center">
      <div className="title">
        <h1>線上簽到系統</h1>
        <h2>後台登入</h2>
      </div>
      <Form className="p-d-flex p-flex-column">
        <h2 className="p-m-0 p-text-center">Login</h2>
        <div
          className="p-d-flex p-flex-column p-jc-between p-mt-3 p-pb-3"
          style={{ height: '100%' }}
        >
          <span className="p-input-icon-left p-mb-3">
            <i className="pi pi-user" />
            <InputText
              className="p-inputtext-md"
              placeholder="Username"
              autoComplete="username"
              onChange={onChangeUserName}
              style={{ width: '100%' }}
            />
          </span>
          <span className="p-input-icon-left p-mb-3">
            <i className="pi pi-lock" />
            <InputText
              className="p-inputtext-md"
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              onChange={onChangePassword}
              style={{ width: '100%' }}
            />
          </span>
          <Button
            type="button"
            label="Submit"
            className="p-button-md"
            onClick={onLogin}
          />
        </div>
      </Form>
      <Version className="p-d-flex p-flex-column p-ai-center p-jc-center">
        <div className="p-mb-4">v1.6.8</div>
        <div>
          <Link to="/" className="p-mr-4">
            <BiMessageCheck size="2rem" />
          </Link>
          <Link to="/qrcode">
            <ImQrcode size="2rem" />
          </Link>
        </div>
      </Version>
    </Main>
  );
}

export default Login;
