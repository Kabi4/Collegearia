import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function RedirectRoutes({ children, user, fallbackRoute, ...props }) {
    return (
        <Route
            {...props}
            render={() => {
                if (!user) {
                    return children;
                } else {
                    return <Redirect to={{ pathname: fallbackRoute }} />;
                }
            }}
        />
    );
}

export function ProtectedRoutes({ children, user, fallbackRoute, ...props }) {
    return (
        <Route
            {...props}
            render={({ location }) => {
                if (user) {
                    return children;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: fallbackRoute,
                                state: { from: location },
                            }}
                        />
                    );
                }
            }}
        />
    );
}
