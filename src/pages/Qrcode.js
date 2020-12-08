import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { BiMessageCheck } from 'react-icons/bi';

const Main = styled.section`
  position: relative;
  background-color: #006fe3;
  height: 100vh;

  .title {
    position: absolute;
    top: 5vh;
    text-align: center;
    z-index: 1;

    h1 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: bold;
      color: ${(p) => p.theme.white};
    }

    h2 {
      margin: 0;
      font-size: 1.25rem;
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
  color: ${(p) => p.theme.white};
  opacity: 0.6;

  b {
    margin: 0 0.5rem;
  }

  a {
    text-decoration: none;
    color: ${(p) => p.theme.white};
  }
`;

function Qrcode() {
  const { config } = useSelector((state) => state.config);

  return (
    <Main className="p-d-flex p-flex-column p-ai-center">
      <div className="title">
        <h1>掃描簽到</h1>
        <h2>QRCODE</h2>
      </div>
      <img src={config.qrcode} />
      <Version className="p-d-flex p-ai-center p-jc-center">
        <Link to="/login" className="p-mr-4">
          線上簽到系統
        </Link>
        <Link to="/">
          <BiMessageCheck size="2rem" />
        </Link>
      </Version>
    </Main>
  );
}

export default Qrcode;
