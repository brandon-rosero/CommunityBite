import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Card, Empty, SpinLoading} from "antd-mobile";
import CommentsCard from "../components/CommentsCard";
import {sumReplySize} from "../utils/BasicUtils";
import {getPostUsingGet} from "../services/PostController";

const PostPage = () => {
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const [data, setData] = useState({});

    const loadData = () => {
        setLoading(true);
        const newData = getPostUsingGet(id);
        // 这里是因为地址相同，setData不会执行
        setData({...newData});
        setLoading(false);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="post-details">
            {loading &&
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "30vh"}}>
                    <SpinLoading></SpinLoading>
                </div>
            }
            {
                !loading && <>
                    <div style={{marginTop: 0}}>
                        <div>
                            <h1>{data.title}</h1>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            borderLeft: "5px solid rgb(73,112,242)",
                            paddingLeft: 12,
                            height: 26,
                        }}>
                            <div style={{fontSize: 14, color: "gray"}}>{data.author} Posted on {data.date}</div>
                        </div>
                        <div style={{marginTop: 20, fontSize: 18}}>{data.content}</div>
                    </div>
                    {/*<Divider/>*/}
                    <Card style={{padding: 0, marginTop: 20}} title={`Number of reviews: ${sumReplySize(data)}`}>
                        {data.replys.length === 0 && <div><Empty/></div>}
                        {data.replys.map((reply, index) => (
                            <div key={index}>
                                <CommentsCard loadData={loadData} reply={reply}></CommentsCard>
                                {(reply.subReplys !== undefined && reply.subReplys !== null) && (
                                    <div style={{padding: "0px 40px"}}>
                                        {reply.subReplys.map((subReplys, index) => {
                                            return (
                                                <div key={subReplys.id}><CommentsCard loadData={loadData}
                                                                                      reply={subReplys}></CommentsCard>
                                                </div>)
                                        })}
                                    </div>
                                )}
                            </div>
                        ))}
                    </Card></>
            }
        </div>
    );
};

export default PostPage;
