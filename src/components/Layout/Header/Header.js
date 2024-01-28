import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { postLogout } from "../../../service/apiService";
import { toast } from "react-toastify";
function Header() {
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);
  useEffect(() => {
    const handleShowSettings = () => {
      if (localStorage.getItem("token")) {
        setShowSettings(!showSettings);
      }
    };
    handleShowSettings();
  }, []);
  const handleLogout = async () => {
    await postLogout();
    setShowSettings(!showSettings);
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Đăng xuất thành công");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <img
            src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          React
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Trang chủ
            </NavLink>
            <NavLink to="/my-course" className="nav-link">
              Các khóa học của tôi
            </NavLink>
            <NavLink to="/dashboard" className="nav-link">
              Dashboard
            </NavLink>
          </Nav>
          {showSettings ? (
            <>
              <Nav className="d-flex align-items-center p-3">
                <NavDropdown title="Cài đặt" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => handleLogout()}>
                    Đăng xuất
                  </NavDropdown.Item>
                  <NavDropdown.Item>Thông tin cá nhân</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </>
          ) : (
            <>
              <Nav className="d-flex align-items-center p-2">
                <NavLink
                  to="/login"
                  className="nav-link "
                  style={{ textDecoration: "underline" }}
                >
                  Bạn chưa đăng nhập?
                </NavLink>
                <NavLink to="/login">
                  <button className="btn-login">Đăng nhập</button>
                </NavLink>
              </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
