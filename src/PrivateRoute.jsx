import React from 'react';
import { isLogin } from './utils';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component : Component, ...rest }) => {
    return (
        <div>
            <Route {...rest} render={props => (
             isLogin() ? <Component {...props} /> 
             : <Redirect to="/login" />   
            )} />
        </div>
    );
};

export default PrivateRoute;