import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Layout from "../Layout/Layout";
import Container from "react-bootstrap/Container";
import { setChallenge } from "../Utility/challengeUtils";
const AddChallenge = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tagsObj, setTags] = useState({
    tech: false,
    feature: false,
  });

  const onTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const onTagsHandler = (e) => {
    let name = e.target.name;
    let checked = e.target.checked;
    let tags = { ...tagsObj };
    tags[name] = checked;
    setTags(tags);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setChallenge(title, description, tagsObj);
    console.log(title);
    console.log(description);
    setTitle("");
    setDescription("");
    let tags = { ...tagsObj };
    Object.keys(tags).map((tag) => (tags[tag] = false));
    setTags(tags);
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
          <Form.Group className="mb-3" id="tags">
            <Form.Label>Tags</Form.Label>
            {Object.keys(tagsObj).map((tag) => (
              <Form.Check
                type="checkbox"
                key={tag}
                onChange={onTagsHandler}
                label={tag}
                checked={tagsObj.tag}
                name={tag}
              />
            ))}
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
