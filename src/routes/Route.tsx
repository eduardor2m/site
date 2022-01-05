import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface RouteWrapperProps extends RouteProps {
  isPrivate?: boolean;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  const signed = false; // overrite this value with the isAuthenticated verification using your current authentication context
  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} component={Component} />;
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
