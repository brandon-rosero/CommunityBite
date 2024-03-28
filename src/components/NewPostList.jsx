import {List, Card, Avatar, Space, Divider} from 'antd-mobile';
import {ThumbIcon} from "antd-mobile/es/components/slider/thumb-icon";
import {HeartOutline, LikeOutline, MessageOutline} from "antd-mobile-icons";
import PostCard from "./PostCard";

const NewPostList = ({postsList}) => {
    // console.log(postsList);

    return (
        <div>
            {postsList.map((post, index) => {
                return (
                    <PostCard key={post.id} post={post}></PostCard>
                )
            })}
        </div>
    )
};

export default NewPostList;