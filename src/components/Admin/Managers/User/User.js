import React, { useState, useEffect } from "react";
import CreateUserModal from "./CreateUserModal";
import TableUser from "./TableUser";
import { showListUser } from "../../../../service/apiService";

export default function User() {
  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    handleShowUser();
  }, []);
  const handleShowUser = async () => {
    const data = await showListUser();
    console.log(data);
    setListUsers(data.data.data);
  };
  console.log(listUsers);
  return (
    <>
      <div className="user-manager-container">
        <h6 className="user-manager-title">Quản lý người dùng</h6>
        <div className="btn-add-user-manager">
          <CreateUserModal handleShowUser={handleShowUser} />
        </div>
        <div className="user-manager-table container">
          <TableUser listUsers={listUsers} />
        </div>
      </div>
    </>
  );
}
