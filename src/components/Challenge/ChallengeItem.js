import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";
const ChallengeItem = ({ data }) => {
  const [vote, setVote] = useState(false);
  const upvoteHandler = (data) => {
    console.log(data);
    setVote(true);
  };
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <small className="text-muted">{data.tags}</small>
            </Col>
            <Col md="auto"></Col>
            <Col xs lg="1">
              <BsFillHeartFill
                color={vote ? "red" : "grey"}
                style={{ cursor: "pointer" }}
                onClick={() => upvoteHandler(data)}
              />
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};
export default ChallengeItem;
