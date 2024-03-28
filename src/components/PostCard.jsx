import {Avatar, Card, Divider, Space} from "antd-mobile";
import {HeartOutline, LikeOutline, MessageOutline} from "antd-mobile-icons";
import {useNavigate} from "react-router-dom";
import {sumReplySize} from "../utils/BasicUtils";

const PostCard = ({post}) => {
    const Navigate = useNavigate();

    const handleClicked = post => {
        // jump to the post page and pass the id as a parameter
        Navigate(`/post/${post.id}`);
    };

    return (
        <Card key={post.id} onClick={() => handleClicked(post)}>
            <div style={{display: "flex"}}>
                <div>
                    <Avatar
                        src={"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"}/>
                </div>
                <div style={{marginLeft: 12}}>
                    <div style={{display: "flex", alignItems: "end", color: "darkgray"}}>
                        <div style={{fontSize: 14, fontWeight: 600}}>
                            {post.author}
                        </div>
                        <div style={{marginLeft: 12, fontSize: 12}}>
                            {post.date}
                        </div>
                    </div>
                    <div style={{fontSize: 13, marginTop: 6}}>
                        {post.title}
                    </div>
                    <div style={{marginTop: 13}}>
                        <Space style={{'--gap': '18px'}}>
                            <LikeOutline color={"green"}/>
                            <HeartOutline color={"red"}/>
                            <div>
                                <MessageOutline/>
                                <span style={{fontSize: 13}}>{sumReplySize(post)}</span>
                            </div>
                        </Space>
                    </div>
                </div>
            </div>
            <Divider/>
        </Card>
    )
};


export default PostCard;