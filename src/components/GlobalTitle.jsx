import React, {useEffect, useState, useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useLocation, useNavigate} from "react-router-dom";
import {ConfigProvider, NavBar, Toast} from "antd-mobile";
import {Edit} from "@nutui/icons-react";

function GlobalTitle() {
    const Navigate = useNavigate();
    const NavBarTheme = {
        nutuiNavbarBoxShadow: "0px 2px 8px rgb(184 184 184)",
    };
    const {user} = useContext(AuthContext);
    const [isBack, setIsBack] = useState(false);
    let local = useLocation();
    useEffect(() => {
        local.pathname === "/" ? setIsBack(false) : setIsBack(true);
    }, [local]);
    const onBackClickhandle = () => {
        window.history.back();
    };

    const handleEditClick = () => {
        !user ? Navigate("/login") : Navigate(`/editPost`);
    };

    return (
        <>
            <ConfigProvider theme={NavBarTheme}>
                <NavBar
                    style={{
                        '--height': '46px',
                        '--border-bottom': '1px #eee solid',
                    }}
                    back={isBack ? "返回" : null}
                    onBack={onBackClickhandle}
                    right={!isBack ? <Edit onClick={handleEditClick}/> : null}
                >
                    Posting donation
                </NavBar>
            </ConfigProvider>
        </>
    );
}

export default GlobalTitle;
