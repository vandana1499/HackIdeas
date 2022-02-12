import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Layout from "../Layout/Layout";
import Container from "react-bootstrap/Container";
const AddChallenge = () => {
  return (
    <Layout>
      <Container className="mt-3">
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title " />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Describe it" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="tags">
            <Form.Label>Tags</Form.Label>
            <Form.Control type="text" placeholder="tags" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};
export default AddChallenge;
