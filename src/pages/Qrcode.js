import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { BiMessageCheck } from 'react-icons/bi';
import _ from 'lodash';

import { FETCH_CONFIG } from '../reducers/config';

const Main = styled.section`
  position: relative;
  background-color: ${(p) => p.theme.milk};

  &::before {
    content: '';
    position: fixed;
    top: 0;
    width: 100vw;
    height: 85vh;
    background-color: #006fe3;
    border-radius: 0 0 30% 30%;
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
      font-size: 2.25rem;
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
    max-width: 224px;
    z-index: 1;
  }
`;

const Version = styled.div`
  position: fixed;
  bottom: 2rem;
  width: 100%;
  text-align: center;
  color: ${(p) => p.theme.gray};
  user-select: none;

  b {
    margin: 0 0.5rem;
  }

  a {
    text-decoration: none;
    color: ${(p) => p.theme.gray};
  }
`;

function Qrcode() {
  const dispatch = useDispatch();
  const { config } = useSelector((state) => state.config);

  useEffect(() => {
    if (_.isEmpty(config)) dispatch({ type: FETCH_CONFIG });
  }, [dispatch]);

  return (
    <Main className="p-d-flex p-flex-column p-ai-center">
      <div className="title">
        <h1>掃描簽到</h1>
        <h2>QRCODE</h2>
      </div>
      <img src={config.qrcode} />
      <Version className="p-d-flex p-ai-center p-jc-center">
        <Link to="/login">線上簽到系統</Link>
        <b>v1.6.8</b>
        <Link to="/">
          <BiMessageCheck size="2rem" />
        </Link>
      </Version>
    </Main>
  );
}

export default Qrcode;
