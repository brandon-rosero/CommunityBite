import React, {useEffect, useState, useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {useLocation, useNavigate} from "react-router-dom";
import {ConfigProvider, Footer, NavBar, Toast} from "antd-mobile";
import {Edit} from "@nutui/icons-react";

function GlobalFooter() {
    const links = [
        {
            text: '阿里云',
            href: 'https://www.aliyun.com/',
        },
        {
            text: '支付宝',
            href: 'https://www.antgroup.com/',
        },
    ]

    const chipsLinkData = [
        {
            text: '蚂蚁借呗',
            type: 'link',
        },
        {
            text: '备用金',
            type: 'link',
        },
        {
            text: '蚂蚁花呗',
            type: 'link',
        },
    ]

    return <Footer
        // label='没有更多了'
        content='@ 2004-2024 Made By ❤'
    ></Footer>
}

export default GlobalFooter;
