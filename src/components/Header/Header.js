import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">HackIdeas</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link as={Link} to={{ pathname: "/" }}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={{ pathname: "/add-challenge" }}>
            Add Challenge
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
