import React, { Suspense, lazy } from "react";
import Spinner from "./components/base/Spinner";

const Router = lazy(() => import("./Router"));

const App = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Router />
        </Suspense>
    )
}

export default App;