import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Layout from "../Layout/Layout";
import { setUserSession } from "../Utility/utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [empId, setEmpid] = useState("");
  const onEmployeeHanlder = (e) => {
    setEmpid(e.target.value);
  };
  const submitHanlder = (e) => {
    e.preventDefault();
    setUserSession(empId);
    setEmpid("");
    navigate("/challenge");
    //window.location.href = "/challenge";
    // console.log(this.props.location);
    // window.history.pushState(location, "/challenge");
  };
  return (
    <Layout>
      <Container className="mt-3">
        <Form onSubmit={submitHanlder}>
          <Form.Group className="mb-3" controlId="employeeId">
            <Form.Label>Employee Id</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter employee Id"
              value={empId}
              onChange={onEmployeeHanlder}
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
export default Login;
