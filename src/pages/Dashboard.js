import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { BiMessageCheck } from 'react-icons/bi';
import { ImQrcode } from 'react-icons/im';
import { DateTime } from 'luxon';

import { STORAGE_AUTH } from '../reducers/auth';
import { FETCH_USERS } from '../reducers/users';

import Storage from '../boot/storage';

const Main = styled.section`
  position: relative;
  height: 100vh;
  background-color: #006fe3;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
  }

  .title {
    position: absolute;
    top: 3vh;
    text-align: center;
    user-select: none;
    z-index: 1;

    h1 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: bold;
      color: ${(p) => p.theme.white};
    }

    h2 {
      margin: 0;
      color: ${(p) => p.theme.white};
    }
  }
`;

const Version = styled.div`
  position: fixed;
  bottom: 2rem;
  width: 100%;
  text-align: center;
  color: ${(p) => p.theme.white};
  user-select: none;

  a {
    color: ${(p) => p.theme.white};
    text-decoration: none;
  }
`;

function Dashboard() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const { lists } = useSelector((state) => state.users);

  if (!auth) return <Redirect to="/login" />;
  if (!auth && Storage.getItem(STORAGE_AUTH)) return null;

  useEffect(() => {
    console.log('FETCH_USERS');
    dispatch({ type: FETCH_USERS });
  }, [dispatch]);

  const renderId = (rowData) => {
    return lists.indexOf(rowData);
  };

  const renderStatus = ({ status }) => {
    return (
      <span className={`p-tag ${status ? 'p-tag-success' : 'p-tag-danger'}`}>
        {status ? '已到' : '未到'}
      </span>
    );
  };

  const renderCreateAt = ({ createAt, updateAt }) => {
    const dt = DateTime.fromMillis(updateAt || createAt);
    return (
      <>
        {dt.toFormat('yyyy-MM-dd')}
        <br />
        {dt.toFormat('HH:mm:ss')}
      </>
    );
  };

  return (
    <Main className="p-d-flex p-flex-column p-ai-center">
      <div className="title">
        <h1>線上簽到系統</h1>
      </div>
      <Card style={{ marginTop: '10vh', width: '80%' }}>
        <DataTable
          className="p-datatable-sm"
          value={lists}
          style={{ overflow: 'scroll' }}
        >
          <Column
            field="id"
            header="#"
            body={renderId}
            style={{ width: '30px' }}
          ></Column>
          <Column
            field="name"
            header="姓名"
            sortable
            style={{ width: '100px' }}
          ></Column>
          <Column
            field="status"
            header="狀態"
            body={renderStatus}
            style={{ width: '55px' }}
          ></Column>
          <Column
            field="createAt"
            header="簽到時間"
            body={renderCreateAt}
            style={{ width: '120px' }}
            sortable
          ></Column>
        </DataTable>
      </Card>
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

export default Dashboard;
