import {Avatar, Button} from "@nutui/nutui-react";
import {Card, Divider, Popup, TextArea, Toast} from "antd-mobile";
import {useContext, useState} from "react";
import {getData, setData} from "../store/PostData";
import {AuthContext} from "../context/AuthContext";
import {getCurrentTime, getRandomId} from "../utils/BasicUtils";

/**
 * 评论组件
 * @param reply
 * @returns {JSX.Element}
 * @constructor
 */
const CommentsCard = ({reply, loadData}) => {
    const [replyValue, setReplyValue] = useState(reply);
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState("");
    const {user} = useContext(AuthContext);

    const addReply = () => {
        if (value === "") {
            Toast.show({
                icon: 'fail',
                content: `Comments cannot be empty`,
            })
            return;
        }
        const newReply = {
            id: getRandomId(),
            content: value,
            author: user?.username || "",
            date: getCurrentTime(),
        };

        const oldData = getData();
        let newData = [...oldData];
        // let parentObj = null;

        // 1. 找到父id
        newData.map((post, index) => {
            if (post.replys !== undefined) {
                post.replys.map((parentReply, index) => {
                    if (parentReply.id === reply.id) {
                        // parentObj = parentReply;
                        parentReply.subReplys.push(newReply);
                        // 执行修改
                        return;
                    }
                    // 寻找子评论
                    if (parentReply.subReplys !== undefined) {
                        parentReply.subReplys.map((childReply, index) => {
                            if (childReply.id === reply.id) {
                                parentReply.subReplys.push(newReply);
                            }
                        })
                    }
                })

            }
        });

        setData(newData);

        // console.log("获取到的数据", getData());

        // 刷新
        loadData();

        Toast.show({
            icon: 'success',
            content: `The review was successful ${value}`,
        })

        // console.log(getData());

        setVisible(false);
        setValue("");
    }

    return (
        <>
            <Card style={{padding: 0}} onClick={() => {
                setVisible(true)
            }}>
                <div style={{display: "flex"}}>
                    <div><Avatar size={30}
                                 src={"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"}/>
                    </div>
                    <div style={{paddingLeft: 12}}>
                        <div style={{color: "black", fontSize: 13}}>{replyValue.author}</div>
                        <div style={{color: "gray", fontSize: 10, marginTop: 3}}>{replyValue.date} &nbsp; IP:
                            New York
                        </div>
                        <div style={{
                            width: "100%",
                            fontSize: 15,
                            color: "black",
                            marginTop: 6
                        }}>{replyValue.content}</div>
                    </div>
                </div>

                <>
                    <Popup
                        visible={visible}
                        onMaskClick={() => {
                            setVisible(false)
                        }}
                        onClose={() => {
                            setVisible(false)
                        }}
                        bodyStyle={{
                            borderTopLeftRadius: '8px',
                            borderTopRightRadius: '8px',
                            minHeight: '40vh',
                            padding: "20px 15px"
                        }}
                    >
                        <div>
                            <TextArea
                                value={value}
                                onChange={val => {
                                    setValue(val)
                                }}
                                maxLength={300}
                                showCount
                                placeholder='Please enter your content'
                                autoSize={{minRows: 3, maxRows: 5}}
                            />
                            <div>
                                <Button onClick={addReply} type={"success"}>submit</Button>
                            </div>
                        </div>
                    </Popup>
                </>
            </Card>
            {/*<Divider style={{marginBottom: 0}}></Divider>*/}
        </>
    )
};

export default CommentsCard;