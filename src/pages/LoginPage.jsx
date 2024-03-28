import React, {useState, useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {Input, Button} from "@nutui/nutui-react";
import {Card, Form, TextArea, Toast} from "antd-mobile";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {user, setUser} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        const authData = {
            username,
            password,
            isLoggedIn: true,
        };
        setLoading(true); // 开始加载
        // 模拟登录请求
        setTimeout(() => {
            Toast.show({
                icon: 'success',
                content: '登录成功',
            })
            setLoading(false); // 加载结束
            setUser(authData);
            window.history.back();
        }, 2000);

    };

    return (
        <div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <div style={{fontSize: 18, fontWeight: 600, marginTop: 12}}>大标题</div>
                <div style={{fontSize: 16, fontWeight: 400, marginTop: 8}}>小标题</div>
            </div>

            <Card className="editArea">
                <Form layout='vertical'>
                    <Form.Item label='Account' name='username'>
                        <Input
                            type="text"
                            placeholder='Please enter your username'
                            value={username}
                            onChange={val => {
                                setUsername(val)
                            }}
                        />
                    </Form.Item>
                    <Form.Item label='Password' name='password'>
                        <Input
                            type="password"
                            placeholder="Please enter your password"
                            value={password}
                            onChange={value => setPassword(value)}
                        />
                    </Form.Item>
                </Form>
                <div style={{marginTop: 16, display: "flex", justifyContent: "center"}}>
                    <Button size={"large"} loading={loading} block style={{width: "80%"}} type={"info"}
                            onClick={handleLogin}>login</Button>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;