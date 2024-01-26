import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
export default function TableUser({
  listUsers,
  handleBtnShowUserDelete,
  handleBtnShowUserUpdate,
  pageCount,
  handlePageClick,
}) {
  // const [userUpdate, setUserUpdate] = useState({});
  const handleShowModalUpdate = (user) => {
    console.log(user);
    handleBtnShowUserUpdate();

    // setUserUpdate(user);
  };
  const handleShowModalDelete = (user) => {
    console.log("user", user);
    handleBtnShowUserDelete(user);
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
                      onClick={() => handleShowModalUpdate(user)}
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
                      onClick={() => handleShowModalDelete(user)}
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
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
