import React, { useState, useEffect } from "react";
import CreateUserModal from "./CreateUserModal";
import TableUser from "./TableUser";
import { showListUser } from "../../../../service/apiService";
import UpdateUserModal from "./UpdateUserModal";

export default function User() {
  const [listUsers, setListUsers] = useState([]);
  const [showModelCreate, setShowModelCreate] = useState(false);

  useEffect(() => {
    handleShowUser();
  }, []);
  const handleShowUser = async () => {
    const data = await showListUser();
    console.log(data);
    setListUsers(data.data.data);
  };
  console.log(listUsers);
  const handleShowModelCreate = () => {
    setShowModelCreate(!showModelCreate);
  };
  return (
    <>
      <div className="user-manager-container">
        <h6 className="user-manager-title">Quản lý người dùng</h6>
        <div className="btn-add-user-manager">
          <CreateUserModal
            handleShowUser={handleShowUser}
            handleShowModelCreate={handleShowModelCreate}
          />
          <UpdateUserModal />
        </div>
        <div className="user-manager-table container">
          <TableUser listUsers={listUsers} />
        </div>
      </div>
    </>
  );
}
