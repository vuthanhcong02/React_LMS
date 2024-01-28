import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postLogin } from "../../service/apiService";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    if (email === "" || password === "") {
      toast.error("Vui lòng nhập đầy đủ thông tin");
    } else if (!checkEmail(email)) {
      toast.error("Email không hợp lệ");
    } else {
      // call api
      const data = await postLogin(email, password);
      console.log(data);
      if (data && data.access_token) {
        localStorage.setItem("token", data.access_token);
        navigate("/");
      } else {
        toast.error("Đăng nhập thất bại!");
      }
    }
  };
  const checkEmail = (email) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };
  return (
    <div className="login-container">
      <div className="login-title">
        <h5>Đăng nhập</h5>
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <div className="form-group">
            <label>Email(*)</label>
            <input
              type="text"
              placeholder="Nhập tên đăng nhập..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu(*)</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="btn-login">
          <button onClick={() => handleLogin()}>Đăng nhập</button>
          <span onClick={() => navigate("/")}>Quay lại trang chủ</span>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}
