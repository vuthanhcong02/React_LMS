import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../../service/apiService";
import { toast } from "react-toastify";

function DeleteUserModal(props) {
  const { show, setShow, userDelete, handleShowUser, currentPage } = props;
  const handleClose = () => setShow(false);
  const handleDeleteUser = () => {
    deleteUserSelected();
    handleClose();
    handleShowUser(currentPage);
  };
  const deleteUserSelected = async () => {
    const data = await deleteUser(userDelete.id);
    if (data.status === true) {
      toast.success("Xóa người dùng thành công");
    } else {
      toast.error(data.message);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc chắn muốn xóa người dùng với email{" "}
          {userDelete ? userDelete.email : ""} ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={() => handleDeleteUser()}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteUserModal;
