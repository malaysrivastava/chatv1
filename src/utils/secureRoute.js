import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const SecureRoute = ({ component: Component,user, ...rest }) => {

    console.log(user)

  return (
    <Route
      {...rest}
      render={(props) =>
        true? <Component {...props} data={user} /> : <Redirect to="/login" />
      }
    />
  );
};
export default SecureRoute;