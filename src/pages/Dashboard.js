import React, { useEffect, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { BiMessageCheck } from 'react-icons/bi';
import { ImQrcode } from 'react-icons/im';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { DateTime } from 'luxon';

import { STORAGE_AUTH } from '../reducers/auth';
import { FETCH_USERS, DELETE_ALL_USERS } from '../reducers/users';

import Storage from '../boot/storage';

const Main = styled.section`
  position: relative;

  .title {
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: #006fe3;

    h1 {
      margin: 0;
      margin-left: 1rem;
      font-size: 1.5rem;
      font-weight: bold;
      color: ${(p) => p.theme.white};
    }

    a {
      position: absolute;
      top: 1.25rem;
      text-decoration: none;
      color: ${(p) => p.theme.white};

      &.link-home {
        right: 2.5rem;
      }

      &.link-qrcode {
        right: 1.5rem;
      }
    }
  }
`;

function Dashboard() {
  const tbRef = useRef(null);
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const lists = useSelector((state) =>
    state.users.lists.map((item, index) => ({
      ...item,
      index,
      createAt: item.createAt
        ? DateTime.fromMillis(item.createAt).toFormat('yyyy-MM-dd HH:mm:ss')
        : null,
      updateAt: item.updateAt
        ? DateTime.fromMillis(item.updateAt).toFormat('yyyy-MM-dd HH:mm:ss')
        : null,
    }))
  );

  if (!auth) return <Redirect to="/login" />;
  if (!auth && Storage.getItem(STORAGE_AUTH)) return null;

  useEffect(() => {
    dispatch({ type: FETCH_USERS });
  }, [dispatch]);

  const onDeleteAllUsers = () =>
    confirm('確定要移除所有紀錄?')
      ? dispatch({ type: DELETE_ALL_USERS })
      : null;

  const onExportCSV = () => tbRef.current.exportCSV();

  const renderButtons = () => {
    return lists.length > 0 ? (
      <>
        <Button
          type="button"
          label="下載簽到資料"
          className="p-button-success p-button-lg p-mt-4"
          style={{ width: '80%' }}
          onClick={onExportCSV}
        />
        <Button
          type="button"
          label="清除所有資料"
          className="p-button-danger p-button-lg p-mt-4 p-mb-6"
          style={{ width: '80%' }}
          onClick={onDeleteAllUsers}
        />
      </>
    ) : null;
  };

  return (
    <Main className="p-d-flex p-flex-column p-ai-center">
      <div className="title">
        <h1>線上簽到系統</h1>
        <Link to="/" className="link-home p-mr-6">
          <BiMessageCheck size="2rem" />
        </Link>
        <Link to="/qrcode" className="link-qrcode">
          <ImQrcode size="2rem" />
        </Link>
      </div>
      <DataTable
        ref={tbRef}
        className="p-datatable-sm p-datatable-gridlines p-datatable-striped"
        value={lists}
      >
        <Column field="index" header="#" style={{ width: '10%' }}></Column>
        <Column
          field="school"
          header="學校"
          sortable
          style={{ width: '30%' }}
        ></Column>
        <Column
          field="name"
          header="姓名"
          sortable
          style={{ width: '20%' }}
        ></Column>
        <Column
          field="createAt"
          header="簽到時間"
          style={{ width: '30%' }}
          sortable
        ></Column>
      </DataTable>
      {renderButtons()}
    </Main>
  );
}

export default Dashboard;
