import React from "react";
import jwt_decode from "jwt-decode";
import "./style.scss";
import { useSelector } from "react-redux";
import { AppState } from "../../reducers";
import { Link } from "react-router-dom";

const LoginHeaderTop = () => {
  const { token } = useSelector((state: AppState) => state.loginForm);
  if(token){
      var { name } = jwt_decode(token);
  }
  return name ? (
    <div className="login-headertop-active-wrapper">{name}</div>
  ) : (
    <Link to="/login">
      <div className="login-headertop-wrapper">Đăng nhập</div>
    </Link>
  );
};

export default LoginHeaderTop;
