import React, { useState, useEffect } from "react";
import UpdateUserModal from "./UpdateUserModal";
export default function TableUser({ listUsers }) {
  const [show, setShow] = useState(false);
  const [userUpdate, setUserUpdate] = useState({});
  const handleShowUser = (user) => {
    console.log(user);
    setShow(true);
    setUserUpdate(user);
  };
  return (
    <>
      <table className="table table-bordered table-hover mt-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col" colSpan="2">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {listUsers ? (
            listUsers.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      }
                      alt="Avatar"
                      className="rounded-circle"
                      width="35"
                      height="35"
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => handleShowUser(user)}
                    >
                      Sửa
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <>
              <h1>loading...</h1>
            </>
          )}
        </tbody>
      </table>
      <UpdateUserModal
        showModal={show}
        handleCloseModal={() => setShow(false)}
        userUpdate={userUpdate}
      />
    </>
  );
}
