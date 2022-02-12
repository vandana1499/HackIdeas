import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">HackIdeas</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/add-challenge">Add Challenge</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
