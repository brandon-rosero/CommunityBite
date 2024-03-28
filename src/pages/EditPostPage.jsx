import React, {useState, useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {Button, Card, Form, Input, TextArea, Toast} from "antd-mobile";
import {getData, setData} from "../store/PostData";
import dayjs from "dayjs";
import {getCurrentTime, getRandomId} from "../utils/BasicUtils";

function EditPostPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const {user} = useContext(AuthContext);

    const HandlePublish = e => {
        const newPost = {
            title: title,
            content: content,
            author: user?.username || "",
            date: getCurrentTime(),
            id: getRandomId()
        }

        const oldData = getData();
        let newData = [...oldData];
        newData.push(newPost);

        setData(newData);

        Toast.show('The release was successful');
        window.history.back();
    };

    return (
        <div>
            <Card title={"Edit Post"} className="editArea">
                <Form layout='vertical'>
                    <Form.Item label='title' name='username'>
                        <Input
                            type="text"
                            placeholder="Please enter title"
                            value={title}
                            onChange={e => setTitle(e)}
                        />
                    </Form.Item>
                    <Form.Item label='content' name='password'>
                        <TextArea
                            placeholder={"Please enter content"}
                            showCount
                            maxLength={300}
                            value={content}
                            autoSize={{minRows: 3, maxRows: 10}}
                            onChange={val => {
                                setContent(val)
                            }}
                        />
                    </Form.Item>
                </Form>
                <Button
                    style={{width: "100%"}}
                    color='primary'
                    onClick={() => {
                        HandlePublish()
                    }}
                >
                    Publish
                </Button>
            </Card>
        </div>
    );
}

export default EditPostPage;
