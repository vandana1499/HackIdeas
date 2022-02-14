import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import { getEmpId, removeUserSession } from "../Utility/utils";
const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    removeUserSession();
    navigate("/");
  };
  return (
    // fixed="top"
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">HackIdeas</Navbar.Brand>
        <Nav className="justify-content-end">
          {getEmpId() ? (
            <Nav.Link as={Link} to={{ pathname: "/add-challenge" }}>
              Add Challenge
            </Nav.Link>
          ) : null}
          {getEmpId() ? (
            <Nav.Link as={Link} to={{ pathname: "/challenge" }}>
              Challenge
            </Nav.Link>
          ) : null}
          {getEmpId() ? <Nav.Link onClick={logout}>Logout</Nav.Link> : null}
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
