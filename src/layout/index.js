import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Routes from '../routes';

const Main = styled.main``;

function Layout() {
  const renderRoute = (route) => {
    const { key, path, exact, component: Component } = route;
    return <Route key={key} exact={exact} path={path} component={Component} />;
  };

  const renderRoutes = () => {
    return <>{Routes.map((route) => renderRoute(route))}</>;
  };

  return (
    <Main>
      <Switch>{renderRoutes()}</Switch>
    </Main>
  );
}

export default Layout;
