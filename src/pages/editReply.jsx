import React, { useState, useContext } from "react";
import { Input, Button, TextArea } from "@nutui/nutui-react";
import { AuthContext } from "../context/AuthContext";
function EditReply() {
  const [content, setContent] = useState("");
  const { user } = useContext(AuthContext);

  const HandlePublish = () => {
    const reply = {
      content,
      author: user?.username || "",
      date: "2022-01-01",
    };
    // console.log(reply);
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <div className="editArea">
        <TextArea
          id="content"
          placeholder="Write your reply here"
          rows={10}
          autoSize
          maxLength={1000}
          value={content}
          style={{ fontSize: "16px" }}
          onChange={e => setContent(e)}></TextArea>
        <Button type="info" onClick={HandlePublish}>
          Publish
        </Button>
      </div>
    </div>
  );
}

export default EditReply;
