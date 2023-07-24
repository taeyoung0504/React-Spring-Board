import React, { useState } from "react";
import TextArea from "../component/TextArea";
import "../css/Write.css";
import ClickButton from "../component/ClickButton";
import axios from "axios";
import { AiFillPushpin } from "react-icons/ai";
import Swal from "sweetalert2";

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
  const username = JSON.parse(sessionStorage.getItem("userData")).username;
  
  const onSubmit = () => {
    axios
      .post("/api/board/create", { title, content,writer: username }, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: '성공',
          html: '<b> 게시물 등록에 성공하였습니다.</b>',
      }).then(() => {
        setInputs({
          title: "",
          content: "",
        });
        window.location.href = "http://192.168.10.67:3000/board/list";
      });
    })
      
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: '실패',
          html: '<b> 게시물 등록에 실패하였습니다.</b>',
        });
      });
  };

  const contentStyle = {
    width: "350px",
    marginTop: "30px"
  };
  const contentStyle2 = {
    width: "350px",
    marginTop: "-10px",
  };
  const WritebuttonStyle = {
    height: "70px",
    width: "350px",
  };

  return (
    <div className="write_input">
      <div id="writetitleicon">
        <AiFillPushpin />
        <strong id="titlewrite">Write</strong>
      </div>
      <TextArea style={contentStyle} value={title} onChange={onChange} label="Title" placeholder="Input Title" id="title" name="title" rows={1} />
      <TextArea style={contentStyle2} value={content} onChange={onChange} label="Content" placeholder="Input Content" id="content" name="content" rows={14} />
      <ClickButton style={WritebuttonStyle} onClick={onSubmit} buttonText="Write Up" />
    </div>
  );
};

export default Write;