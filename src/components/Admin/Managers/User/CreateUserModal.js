import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default function CreateUserModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="user-manager-btn-add">
        <Button
          className="btn btn-primary"
          onClick={handleShow}
          style={{
            width: "150px",
            marginLeft: "10px",
            padding: "7px 16px",
          }}
        >
          <FaPlus size={20} center style={{ marginBottom: "4px" }} />
          Thêm mới
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Thêm mới người dùng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form class="row g-3">
            <div className="col-md-6">
              <label className="form-label">
                Tên đăng nhập<span style={{ color: "red" }}>(*)</span>
              </label>
              <input type="email" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Email<span style={{ color: "red" }}>(*)</span>
              </label>
              <input type="email" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Mật khẩu<span style={{ color: "red" }}>(*)</span>
              </label>
              <input type="password" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Vai trò <span style={{ color: "red" }}>(*)</span>
              </label>
              <select id="inputState" className="form-select">
                <option selected>Sinh viên</option>
                <option>Giảng viên</option>
                <option>Admin</option>
              </select>
            </div>
            <div className="col-6">
              <label className="form-label">Avatar</label>
              <input type="file" className="form-control" />
            </div>
            <div className="col-6">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
