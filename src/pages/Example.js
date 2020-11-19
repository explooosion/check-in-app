import React from 'react';
import styled from 'styled-components';

const Main = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function Example() {
  return (
    <Main>
      <h1>Hello World</h1>
    </Main>
  );
}

export default Example;
