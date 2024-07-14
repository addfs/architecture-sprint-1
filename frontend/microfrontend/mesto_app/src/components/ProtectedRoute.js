import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props  }) => {
  console.log(props.loggedIn, 'route check')

  return (
    <Route exact>
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="./signin" />
      }
    </Route>
)}

export default ProtectedRoute;