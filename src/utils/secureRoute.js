import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const SecureRoute = ({ component: Component,user, ...rest }) => {


  return (
    <Route
      {...rest}
      render={(props) =>
        user? <Component {...props} data={user} /> : <Redirect to="/login" />
      }
    />
  );
};
export default SecureRoute;