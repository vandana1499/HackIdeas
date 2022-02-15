import Layout from "../Layout/Layout";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ChallengeItem from "./ChallengeItem";
import { useEffect, useState } from "react";
import { getChallenges, get } from "../Utility/challengeUtils";
const Challenge = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState("");
  useEffect(() => {
    getChallenges(func);
  }, []);

  const func = (x) => {
    if (x.length > 0) {
      setData(x);
    }
  };
  const handleChange = (e) => {
    setSortBy(e.target.value);
    sortHandle(e.target.value);
  };
  const sortHandle = (val) => {
    switch (val) {
      case "Lowest upvote":
        let temp = [...data];
        temp.sort((first, sec) => {
          return first.upvote.like - sec.upvote.like;
        });
        setData(temp);
        break;
      case "Highest upvote":
        let tempHigh = [...data];
        tempHigh.sort((first, sec) => {
          return sec.upvote.like - first.upvote.like;
        });
        setData(tempHigh);
        break;
      case "Created By":
        let tempCrtd = [...data];
        tempCrtd.sort((first, sec) => {
          return first.createdAt - sec.createdAt;
        });
        setData(tempCrtd);
        break;
      case "Recently added":
        let tempRec = [...data];
        tempRec.sort((first, sec) => {
          return sec.createdAt - first.createdAt;
        });
        setData(tempRec);
        break;
      default:
        let tempdef = [...data];
        tempdef.sort((first, sec) => {
          return first.createdAt - sec.createdAt;
        });
        setData(tempdef);
    }
  };
  return (
    <Layout>
      <Container className="mt-5">
        <Row className="mb-4">
          <Col></Col>
          <Col md="auto"></Col>
          <Col xs lg="2">
            <Form.Group className="mb-3">
              <Form.Label>Sort Challenges</Form.Label>
              <Form.Select value={sortBy} onChange={handleChange}>
                <option value="default">Default</option>
                <option value="Lowest upvote">Lowest upvote</option>
                <option value="Highest upvote">Highest upvote</option>
                <option value="Created By">Created By</option>
                <option value="Recently added">Recently added</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <CardGroup className="mb-4">
            <Row xs={1} md={2} className="g-4">
              {data.length > 0 &&
                data.map((item) => <ChallengeItem key={item.id} data={item} />)}
            </Row>
          </CardGroup>
        </Row>
      </Container>
    </Layout>
  );
};
export default Challenge;
