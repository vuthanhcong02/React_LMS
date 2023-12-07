import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
function Header() {
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
            <NavLink to="/" className='nav-link'>Trang chủ</NavLink>
            <NavLink to="/my-course" className='nav-link'>Các khóa học của tôi</NavLink>
            <NavLink to="/dashboard" className='nav-link'>Dashboard</NavLink>
          </Nav>
          <Nav>
          <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item >Login</NavDropdown.Item>
              <NavDropdown.Item >Logout</NavDropdown.Item>
              <NavDropdown.Item >Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;