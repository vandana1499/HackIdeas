import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Layout from "../Layout/Layout";
import Container from "react-bootstrap/Container";
import { setChallenge } from "../Utility/challengeUtils";
const AddChallenge = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const onTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const onTagsHandler = (e) => {
    setTags(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setChallenge(title, description, tags);
    console.log(title);
    console.log(description);
    console.log(tags);

    setTitle("");
    setDescription("");
    setTags("");
  };
  return (
    <Layout>
      <Container className="mt-3">
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title "
              onChange={onTitleHandler}
              value={title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Describe it"
              onChange={onDescriptionHandler}
              value={description}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="tags">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              type="text"
              placeholder="tags"
              onChange={onTagsHandler}
              value={tags}
            />
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
