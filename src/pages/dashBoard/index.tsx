import React from 'react';

import Menu from '../../components/Menu';
import { Container, Content } from './style';

import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Deposits from './Deposits';
import Payments from './Payments';

const DashBoard: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Content>
        <Switch>
          <Route exact path="/dashboard/" component={Home} />
          <Route exact path="/dashboard/depositos" component={Deposits} />
          <Route
            exact
            path="/dashboard/planos"
            component={() => <h1>Planos</h1>}
          />
          <Route exact path="/dashboard/pagamentos" component={Payments} />
          <Route
            exact
            path="/dashboard/transacoes"
            component={() => <h1>Transações</h1>}
          />
        </Switch>
      </Content>
    </Container>
  );
};

export default DashBoard;
