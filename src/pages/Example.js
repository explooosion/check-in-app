import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import {
  FETCH_USERS,
  CREATE_USER,
  UPDATE_USER,
  CHECK_IN_USER,
} from '../reducers/users';

const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function Example() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_USERS });
  }, [dispatch]);

  return (
    <Main>
      <h1>Hello World</h1>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: CREATE_USER,
              payload: { name: 'Jack', status: true },
            })
          }
        >
          ADD
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: UPDATE_USER,
              payload: {
                id: '58fe1970-2b39-11eb-a81c-65400c6d7a7b',
                status: false,
              },
            })
          }
        >
          UPDATE
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: CHECK_IN_USER,
              payload: { name: 'Pig', status: false },
            })
          }
        >
          CHECK IN
        </button>
      </div>
    </Main>
  );
}

export default Example;
