import React, { useState } from "react";
import InputText from "../component/InputText";
import '../css/Join.css';
import ClickButton from "../component/ClickButton";
import { AiFillBell } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";


const JoinbuttonStyle = {
  height: "70px",
  width:"500px",

};
/* 아이디 특수문자, 대문자 검증 */
const containsSpecialCharactersOrUppercase = (str) => {
  // Regular expression to check for special characters or uppercase letters
  const regex = /[!@#$%^&*(),.?":{}|<>]/;
  const hasSpecialCharacters = regex.test(str);
  const hasUppercase = str !== str.toLowerCase();

  return hasSpecialCharacters || hasUppercase;
};



const Join = () => {
  const [inputs, setInputs] = useState({
      nickname: "",
      password: "",
      email:"",
      password2:""
  });
  const {nickname, password, email,password2} = inputs;

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
  
    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  const onSubmit = () => {
    

    if (!nickname || !password || !password2 || !email) {
      Swal.fire(
        'Do you have Null?',
        '<b>빈 값이 존재합니다. 모두 입력해주세요</b>',
        'question'
      )
      return;
    }

    //아이디 검증
    if (containsSpecialCharactersOrUppercase(nickname)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: '<b> 대문자 또는 특수문자는<br> ID로 사용불가능 합니다.!</b>',
      });
      return;
    }

    //비밀번호 검증
    if (password !== password2) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: '<b> 비밀번호가 일치하지 않습니다.</b>',
      });
      return;
    }

  //이메일 검증
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.match(emailRegex)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      html: '<b> 이메일 형식이 올바르지 않습니다.</b>',
    });
    return;
  }

  axios
  .post("/auth/signup", { nickname, password, email }, {
    headers: { "Content-Type": "application/json" }
  })
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: '회원가입 성공',
          html: '<b> 회원가입에 성공하였습니다.</b>',
      })
        window.location.href = "http://localhost:3000";

        setInputs({
          nickname: "",
          password: "",
          email:"",
          password2:"",
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };






  return (
    <div className="join_input">
      <div id="singtitleicon"><AiFillBell/><strong id="titleSign">Sign Up</strong></div>
      <InputText id="nickname" value={nickname} label="nickname" placeholder="Input user UserName" name="nickname" type="nickname" height="40px"  onChange={onChange}/><br />
      <InputText id="password" value={password} label="password"  placeholder="Input user Password" name="password" type="password" height="40px"  onChange={onChange}/><br />
      <InputText id="password2" value={password2} label="password2"  placeholder="Input user Re-Password" name="password2" type="password" height="40px" onChange={onChange} /><br />
      <InputText id="email" value={email} label="email"  placeholder="Input user Email" name="email" type="email" height="40px"  onChange={onChange}/><br />
      <ClickButton  style={JoinbuttonStyle} onClick={onSubmit} id="joinbutton" name="joinbutton" buttonText="Sign Up" />
   </div>
  );
};

export default Join;
