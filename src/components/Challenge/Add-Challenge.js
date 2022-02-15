import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Layout from "../Layout/Layout";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { setChallenge } from "../Utility/challengeUtils";
const initialFormData = Object.freeze({
  title: "",
  description: "",
  tagsObj: {
    tech: false,
    feature: false,
  },
});
const AddChallenge = () => {
  const [formData, updateFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [err, setErr] = useState("");

  const findFormErrors = () => {
    const { title, description, tagsObj } = formData;
    const newErrors = {};
    if (!title || title === "") newErrors.title = "Provide valid title";
    if (!description || description === "")
      newErrors.description = "description is blank!";

    return newErrors;
  };

  const onTitleHandler = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    if (errors[e.target.name])
      setErrors({
        ...errors,
        [e.target.name]: null,
      });
  };
  const onDescriptionHandler = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    if (errors[e.target.name])
      setErrors({
        ...errors,
        [e.target.name]: null,
      });
  };
  const onTagsHandler = (e) => {
    let name = e.target.name;
    let checked = e.target.checked;
    let tags = { ...formData.tagsObj };
    tags[name] = checked;
    updateFormData({
      ...formData,
      tagsObj: tags,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      let tags = { ...formData.tagsObj };
      let newTags = Object.keys(tags).filter((tag) => tags[tag] == true);
      console.log(newTags.length);
      if (newTags.length == 0) {
        setChallenge(formData.title, formData.description, {});
      } else
        setChallenge(formData.title, formData.description, formData.tagsObj);
      updateFormData(initialFormData);
      setErr("");
    }
  };
  return (
    <Layout>
      <Container className="mt-3">
        {err && (
          <Alert key="error" variant="danger">
            {err}
          </Alert>
        )}
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title *</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter title "
              onChange={onTitleHandler}
              value={formData.title}
              isInvalid={errors.title}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description *</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Describe it"
              onChange={onDescriptionHandler}
              value={formData.description}
              isInvalid={errors.description}
            />
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controllid="tags">
            <Form.Label>Tags</Form.Label>
            {Object.keys(formData.tagsObj).map((tag) => (
              <Form.Check
                type="checkbox"
                key={tag}
                onChange={onTagsHandler}
                label={tag}
                checked={formData.tagsObj.tag}
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
