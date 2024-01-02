import React from "react";
import CreateUserModal from "./CreateUserModal";
import TableUser from "./TableUser";

export default function User() {
  return (
    <>
      <div className="user-manager-container">
        <h6 className="user-manager-title">Quản lý người dùng</h6>
        <div className="btn-add-user-manager">
          <CreateUserModal />
        </div>
        <div className="user-manager-table container">
          <TableUser />
        </div>
      </div>
    </>
  );
}
