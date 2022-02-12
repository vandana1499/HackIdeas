import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Layout from "../Layout/Layout";
const Login = () => {
  return (
    <Layout>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="employeeId">
            <Form.Label>Employee Id</Form.Label>
            <Form.Control type="text" placeholder="Enter employee Id" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};
export default Login;
