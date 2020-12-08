import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { BiMessageCheck } from 'react-icons/bi';
import { ImQrcode } from 'react-icons/im';
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

const List = styled.div`
  position: relative;
  width: 100vw;
  background-color: ${(p) => p.theme.white};
  border-bottom: 2px solid ${(p) => p.theme.gray2};
`;

const Item = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(p) => p.theme.milk};
  padding: 0.75rem 0.5rem;

  &:not(:last-child) {
    border-bottom: 2px solid ${(p) => p.theme.gray2};
  }

  > div {
    height: inherit;
  }

  &.odd {
    background-color: #eee;
  }
`;

function Dashboard() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const { lists } = useSelector((state) => state.users);

  if (!auth) return <Redirect to="/login" />;
  if (!auth && Storage.getItem(STORAGE_AUTH)) return null;

  useEffect(() => {
    dispatch({ type: FETCH_USERS });
  }, [dispatch]);

  // const renderId = (rowData) => {
  //   return lists.indexOf(rowData);
  // };

  // const renderStatus = ({ status }) => {
  //   return (
  //     <span className={`p-tag ${status ? 'p-tag-success' : 'p-tag-danger'}`}>
  //       {status ? '已到' : '未到'}
  //     </span>
  //   );
  // };

  // const renderCreateAt = ({ createAt, updateAt }) => {
  //   const dt = DateTime.fromMillis(updateAt || createAt);
  //   return (
  //     <>
  //       {dt.toFormat('yyyy-MM-dd')}
  //       {/* <br /> */}
  //       {dt.toFormat('HH:mm:ss')}
  //     </>
  //   );
  // };

  const onDeleteAllUsers = () => {
    const valid = confirm('確定要移除所有紀錄?');
    if (valid) {
      dispatch({ type: DELETE_ALL_USERS });
    }
  };

  const renderItem = (item, index) => {
    const { id, name, school, createAt } = item;
    return (
      <Item key={`item1-${id}`} className={index % 2 ? '' : 'odd'}>
        <div className="p-mr-2">{index + 1}</div>
        <div>
          <div className="p-mr-4 p-text-bold">{name}</div>
          <div className="p-mr-4 p-text-bold">{school}</div>
        </div>
        <div className="p-text-center">
          <div>{DateTime.fromMillis(createAt).toFormat('yyyy-MM-dd')}</div>
          <div>{DateTime.fromMillis(createAt).toFormat('HH:mm:ss')}</div>
        </div>
      </Item>
    );
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
      <List>
        <Item>
          <div className="p-mr-1 p-text-bold">#</div>
          <div className="p-mr-6 p-text-bold">姓名/學校</div>
          <div className="p-text-center p-text-bold">
            <div>報到日期時間</div>
          </div>
        </Item>
        {lists.map((item, index) => renderItem(item, index))}
      </List>
      {lists.length > 0 ? (
        <Button
          type="button"
          label="清除所有資料"
          className="p-button-danger p-button-md p-mt-4 p-mb-6"
          style={{ width: '80%' }}
          onClick={onDeleteAllUsers}
        />
      ) : null}
    </Main>
  );
}

export default Dashboard;
