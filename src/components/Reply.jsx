import randomColor from "randomcolor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Avatar, Button } from "@nutui/nutui-react";
const Reply = ({ data }) => {
  const Navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const HandleReply = () => {
    !user ? Navigate("/login") : Navigate(`/editReply`);
  };
  return (
    <div>
      <div className="post-info">
        <Avatar
          size="small"
          color={randomColor(undefined, "dark")}
          background={randomColor("blue", "light")}>
          {data.author.charAt(0)}
        </Avatar>
        <div className="author">{data.author}</div>
        <div className="date">{data.date}</div>
      </div>
      <div className="reply-content">
        <div>{data.content}</div>
        <Button size="small" type="info" onClick={HandleReply}>
          Reply
        </Button>
      </div>
    </div>
  );
};

export default Reply;
