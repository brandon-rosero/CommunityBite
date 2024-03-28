import React from "react";
import {AuthProvider} from "./context/AuthContext";
import {Outlet} from "react-router-dom";

import GlobalTitle from "./components/GlobalTitle";
import GlobalFooter from "./components/GlobalFooter";
import {WaterMark} from "antd-mobile";

function App() {

    return (
        <AuthProvider>
            <GlobalTitle/>
            <div className="container" style={{marginTop: 10}}>
                <Outlet/>
            </div>
            <GlobalFooter/>
        </AuthProvider>
    );
}

export default App;
