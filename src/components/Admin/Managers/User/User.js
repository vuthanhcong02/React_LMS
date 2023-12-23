import React from "react";
import CreateUserModal from "./CreateUserModal";

export default function User() {
  return (
    <>
      <div className="user-manager-container">
        <h6 className="user-manager-title">Quản lý người dùng</h6>
        <div className="table-user-manager">
          <CreateUserModal />
        </div>
      </div>
    </>
  );
}
