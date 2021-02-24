import React from 'react';

import Menu from '../../components/Menu';
import { Content } from './style';

import { Switch, Route } from 'react-router-dom';

const DashBoard: React.FC = () => {
  return (
    <>
      <Menu />
      <Content>
        <Switch>
          <Route exact path="/dashboard/" component={() => <h1>Home</h1>} />
          <Route
            exact
            path="/dashboard/depositos"
            component={() => <h1>Depósitos</h1>}
          />
          <Route
            exact
            path="/dashboard/planos"
            component={() => <h1>Planos</h1>}
          />
          <Route
            exact
            path="/dashboard/pagamentos"
            component={() => <h1>Pagamentos</h1>}
          />
          <Route
            exact
            path="/dashboard/transacoes"
            component={() => <h1>Transações</h1>}
          />
        </Switch>
      </Content>
    </>
  );
};

export default DashBoard;
