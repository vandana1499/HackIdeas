import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Layout from "../Layout/Layout";
import { setUserSession } from "../Utility/utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const initialFormData = Object.freeze({
  empId: "",
});
const Login = () => {
  const navigate = useNavigate();
  const [formData, updateFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [err, setErr] = useState("");
  const findFormErrors = () => {
    const { empId } = formData;
    const newErrors = {};
    if (!empId || empId === "") newErrors.empId = "Provide valid empid";
    return newErrors;
  };
  const onEmployeeHanlder = (e) => {
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
  const submitHanlder = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setUserSession(formData.empId);
      updateFormData(initialFormData);
      setErr("");
      navigate("/challenge");
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
        <Form onSubmit={submitHanlder}>
          <Form.Group className="mb-3" controlId="employeeId">
            <Form.Label>Employee Id *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter employee Id"
              name="empId"
              controlid="empId"
              value={formData.empId}
              onChange={onEmployeeHanlder}
              isInvalid={errors.empId}
            />
            <Form.Control.Feedback type="invalid">
              {errors.empId}
            </Form.Control.Feedback>
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
