import React, { Suspense, lazy } from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

// ** Import Providers
import MaterialThemeProvider from "./components/providers/theme";
import MuiSnackbarProvider from "./components/providers/snackbar";
import NotificationProvider from "./components/providers/notification";
import Web3Provider from "./components/providers/web3";
import { ModeProvider } from "./components/context/themmode"

import Spinner from "./components/base/Spinner";

import configureStore from "./redux/store";
import { Layout } from "./components/layout/index";

const App = lazy(() => import("./App"));

const store = configureStore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ModeProvider>
                <MaterialThemeProvider>
                    <MuiSnackbarProvider>
                        <NotificationProvider>
                            <Web3Provider>
                                <Suspense fallback={<Spinner />}>
                                    <Layout>
                                        <App />
                                    </Layout>
                                </Suspense>
                            </Web3Provider>
                        </NotificationProvider>
                    </MuiSnackbarProvider>
                </MaterialThemeProvider>
            </ModeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
