import React, { useState } from "react";
import '../css/Login.css';
import InputText from "../component/InputText";
import { AiFillBulb } from "react-icons/ai";
import ClickButton from "../component/ClickButton";
import axios from "axios";
import Swal from "sweetalert2";

const LoginbuttonStyle = {
  height: "70px",
  width: "500px",
};

const Login = ({ onLoginSuccess }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;
  const [errorMessage, setErrorMessage] = useState(null);

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  const onSubmit = () => {
    axios.post("/auth/login", { email, password })
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: '로그인 성공',
          html: '<b> 로그인에 성공하였습니다.</b>',
      })

        sessionStorage.setItem("userData", JSON.stringify(response.data));
        window.location.href = "http://localhost:3000";

        if (onLoginSuccess) {
          onLoginSuccess(response.data);
        }

        setErrorMessage(null);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          html: '<b> 아이디 또는 비밀번호가 틀렸습니다.</b>',
        });

      });
  };

  return (
    <div className="join_input">
      <div id="singtitleicon" ><AiFillBulb /><strong id="titleLogin">Login</strong></div>
      <InputText id="email" value={email} label="email" placeholder="Input user Email" name="email" type="email" height="40px" onChange={onChange} /><br />
      <InputText id="password" value={password} label="password" placeholder="Input user Password" name="password" type="password" height="40px" onChange={onChange} /><br />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <ClickButton style={LoginbuttonStyle} onClick={onSubmit} id="loginbutton" name="loginbutton" buttonText="Login" />
    </div>
  );
};

export default Login;