import React from "react";

export default function TableUser() {
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
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                alt="Avatar"
                className="rounded-circle"
                width="35"
                height="35"
              />
            </td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
