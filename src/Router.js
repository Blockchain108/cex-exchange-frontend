import React, { Suspense, lazy } from "react";
import { connect } from "react-redux"
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ContextLayout } from "./components/layout/index"
import Spinner from "./components/base/Spinner";

// ** Import Route Providers

const Home = lazy(() => import("./pages/home/index"));
const Login = lazy(() => import("./pages/auth/login"));
const Register = lazy(() => import("./pages/auth/register"));

const history = createBrowserHistory({
    basename: "",
    forceRefresh: false,
});

const RouteConfig = ({ component: Component, HomeLayout, AuthLayout, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            return (
                <ContextLayout.Consumer>
                    {context => {
                        let LayoutTag = HomeLayout === true ? context.HomeLayout :
                            AuthLayout === true ? context.AuthLayout : context.HomeLayout
                        return (
                            <LayoutTag {...props}>
                                <Suspense fallback={<></>}>
                                    <Component {...props} />
                                </Suspense>
                            </LayoutTag>
                        )
                    }}
                </ContextLayout.Consumer>
            )
        }}
    />
)

const AppRoute = connect(null)(RouteConfig)

const AppRouter = () => {
    return (
        <Router history={history}>
            <Suspense fallback={<Spinner />}>
                <Switch>
                    <AppRoute path="/" exact component={Home} HomeLayout />
                    <AppRoute path="/login" exact component={Login} AuthLayout />
                    <AppRoute path="/register" exact component={Register} AuthLayout />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default AppRouter;