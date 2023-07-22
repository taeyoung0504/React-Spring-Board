import React, { useState } from "react";
import TextArea from "../component/TextArea";
import "../css/Write.css";
import ClickButton from "../component/ClickButton";
import axios from "axios";
import { AiFillPushpin } from "react-icons/ai";

const Write = () => {
    const [inputs, setInputs] = useState({
        title: "",
        content: "",
      });
      const { title, content } = inputs;

      const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;
    
        setInputs({
          ...inputs,
          [id]: value,
        });
      };
      const onSubmit = () => {
        axios
          .post("/api/create", null, {
            params: { title,content }, // Send 'title' as a request parameter
          // Send 'content' as JSON data in the request body
            headers: { "Content-Type": "application/json" }
          })
          .then((response) => {
            alert('전송이 완료되었습니다.');
    
            setInputs({
                title: "",
                content: "",
              });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };

  const contentStyle = {
    width: "500px",
    marginTop:"30px"
  };
  const contentStyle2 = {
    width: "500px",
    marginTop:"10px",
  };
  const WritebuttonStyle = {
    height: "70px",
    width:"500px",
  };


  return (
    <div className="write_input">
      <div id="writetitleicon"><AiFillPushpin/><strong id="titlewrite">Write</strong></div>
      <TextArea style={contentStyle}  value={title}  onChange={onChange} label="Title" placeholder="Input Title" id="title" name="title" rows={1} />
      <TextArea style={contentStyle2}   value={content} onChange={onChange} label="Content" placeholder="Input Content" id="content" name="content" rows={14} />
      <ClickButton style={WritebuttonStyle} onClick={onSubmit} buttonText="Write Up"/>
    
    </div>
  );
};

export default Write;
