import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { updateUser } from "../../../../service/apiService";
export default function UpdateUserModal({ show, setShow, userUpdate }) {
  //   console.log(showModal);
  //   console.log(userUpdate);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [avatar, setAvatar] = useState("");
  const [previewAvatar, setPreviewAvatar] = useState("");
  const handleClose = () => {
    setShow(false);
    setUsername("");
    setEmail("");
    setPassword("");
    setRole("student");
    setAvatar("");
    setPreviewAvatar("");
  };

  const changeAvatar = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      //   setAvatar(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setAvatar(e.target.files[0]);
  };
  useEffect(() => {
    if (!avatar) {
      setPreviewAvatar(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(avatar);
    setPreviewAvatar(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [avatar]);

  useEffect(() => {
    console.log(userUpdate);
    if (userUpdate) {
      setUsername(userUpdate.name);
      setEmail(userUpdate.email);
      setRole(userUpdate.role);
    }
  }, [userUpdate]);
  const validateField = (value, regex, errorMessage) => {
    if (!regex.test(String(value).toLowerCase())) {
      toast.error(errorMessage);
      return false;
    }
    return true;
  };
  const checkUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    return validateField(
      username,
      usernameRegex,
      "Username trống hoặc không hợp lệ"
    );
  };
  const checkPassword = (password) => {
    const passwordRegex = /^.{6,}$/;
    return validateField(
      password,
      passwordRegex,
      "Password trống hoặc không hợp lệ"
    );
  };
  const handleSubmit = async () => {
    if (!checkUsername(username)) {
      return;
    }
    if (password) {
      if (!checkPassword(password)) {
        return;
      }
    }
    try {
      const data = await updateUser(
        userUpdate.id,
        password,
        username,
        role,
        avatar
      );
      handleClose();
      if (data.success) {
        toast.success("Cập nhật người dùng thành công");
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      <Modal show={show} size="lg" backdrop="static" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cập nhật người dùng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">
                Tên đăng nhập<span style={{ color: "red" }}>(*)</span>
              </label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Email<span style={{ color: "red" }}>(*)</span>
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                disabled
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Mật khẩu
                <span style={{ color: "red", marginRight: "5px" }}>(*)</span>
                (Mật khẩu mới nếu muốn thay đổi)
              </label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Vai trò <span style={{ color: "red" }}>(*)</span>
              </label>
              <select
                id="inputState"
                className="form-select"
                onChange={(e) => setRole(e.target.value)}
                value={role}
              >
                <option value={"student"} defaultValue={"student"}>
                  Sinh viên
                </option>
                <option value={"teacher"}>Giảng viên</option>
                <option value={"admin"}>Admin</option>
              </select>
            </div>
            <div className="col-6">
              <label className="form-label" htmlFor="formFile">
                Avatar
              </label>
              <input
                type="file"
                className="form-control"
                id="formFile"
                onChange={changeAvatar}
              />
            </div>
            <div className="col-6">
              <img
                src={
                  previewAvatar ??
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
                alt="avatar"
                style={{
                  objectFit: "cover",
                  border: "1px solid black",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
