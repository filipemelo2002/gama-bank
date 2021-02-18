import React, { ComponentType } from "react";

import { Redirect, Switch, Route, RouteProps } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";
import Error from "../pages/error";
import RecoveryPass from "../pages/recoveryPass";
import DashBoard from "../pages/dashBoard";

import { isAuth } from "../services/isAuth";

interface PrivateRouteProps extends RouteProps {
  component: ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/error" component={Error} />
      <Route path="/recoveryPass" component={RecoveryPass} />
      <PrivateRoute path="/dashboard" component={DashBoard} />
    </Switch>
  );
};

export default Routes;
