import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';

const PrivateRoute = ({children,...rest}) => {

    const { user, isLoading } = useFirebase();
        if (isLoading) {
            return <Spinner animation="border" variant="success"></Spinner>
        }
        return (
            <Route
                {...rest}style={{color:'white'}}
                render={({ location }) =>
                    user.displayName ? (children) : <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                }
            >

            </Route>
        );
};

export default PrivateRoute;