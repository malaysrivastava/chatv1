import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const SecureRoute = ({ component: Component, ...rest }) => {
  
  return (
    <Route
      {...rest}
      render={(props) =>
        false? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
export default SecureRoute;