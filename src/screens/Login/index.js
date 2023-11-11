import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./index.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [user, setUser] = useState("");
  const [values, setValues] = useState({ pw: "", showPass: false });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPass: !values.showPass });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const btnLogin = () => {
    console.log(user, values.pw);
  };
  return (
    <div className="lg">
      <div className="loginContainer">
        <div className="loginImgBox">
          <img className="loginImg" src={logo} alt="" />
        </div>
        <div className="loginInputBox">
          <div className="inpLogin">
            <input
              value={user}
              onChange={(e) => setUser(e.target.value)}
              type="text"
              className="inp"
              placeholder="Nhập Username"
            />
          </div>
          <div className="inpLogin">
            <input
              className="inp"
              type={values.showPass ? "text" : "password"}
              onChange={handlePasswordChange("pw")}
              value={values.pw}
              placeholder="Nhập password"
            />
            <div
              className="btnInp"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPass ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
            </div>
          </div>
          <button className="loginBtn" onClick={btnLogin}>
            Đăng nhập
          </button>
        </div>
      </div>
      <div className="ftLogin">
        <span>© Minh Thông Technology</span>
      </div>
    </div>
  );
}
