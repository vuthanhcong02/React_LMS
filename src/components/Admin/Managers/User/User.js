import React, { useState, useEffect } from "react";
import CreateUserModal from "./CreateUserModal";
import TableUser from "./TableUser";
import { showListUser } from "../../../../service/apiService";
import DeleteUserModal from "./DeleteUserModal";
import UpdateUserModal from "./UpdateUserModal";

export default function User() {
  const [listUsers, setListUsers] = useState([]);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [userDelete, setUserDelete] = useState({});
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    handleShowUser();
  }, []);
  const handleShowUser = async (currentPage) => {
    const data = await showListUser(currentPage);
    setListUsers(data.data.data);
    setPageCount(data.data.last_page);
  };
  console.log(listUsers);
  const handleShowModalCreate = () => {
    setShowModalCreate(!showModalCreate);
  };
  const handleShowModalUpdate = () => {
    setShowModalUpdate(!showModalUpdate);
    console.log(showModalUpdate);
  };
  const handleShowModalDelete = (user) => {
    setShowModalDelete(!showModalDelete);
    console.log(showModalDelete);
    setUserDelete(user);
    console.log("User Delete", user);
  };
  ///paginate
  const handlePageClick = async (event) => {
    const newPage = +event.selected + 1;
    const data = await showListUser(newPage);
    setCurrentPage(newPage);
    setListUsers(data.data.data);
    console.log(`User requested page number ${event.selected}`);
  };
  return (
    <>
      <div className="user-manager-container">
        <h6 className="user-manager-title">Quản lý người dùng</h6>
        <div className="btn-add-user-manager">
          <CreateUserModal
            handleShowUser={handleShowUser}
            handleShowModalCreate={handleShowModalCreate}
          />
          <UpdateUserModal
            show={showModalUpdate}
            setShow={setShowModalUpdate}
            handleShowModalUpdate={handleShowModalUpdate}
          />
          <DeleteUserModal
            show={showModalDelete}
            setShow={setShowModalDelete}
            handleShowModalDelete={handleShowModalDelete}
            userDelete={userDelete}
            handleShowUser={handleShowUser}
            currentPage={currentPage}
          />
        </div>
        <div className="user-manager-table container">
          <TableUser
            listUsers={listUsers}
            handleShowUser={handleShowUser}
            handleBtnShowUserDelete={handleShowModalDelete}
            handleBtnShowUserUpdate={handleShowModalUpdate}
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        </div>
      </div>
    </>
  );
}
