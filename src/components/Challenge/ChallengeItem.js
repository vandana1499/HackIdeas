import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BsFillHeartFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { setUpvote } from "../Utility/challengeUtils";
import { getEmpId } from "../Utility/utils";
const ChallengeItem = ({ data }) => {
  const [vote, setVote] = useState(false);
  const [loginId, setLoginId] = useState("");
  const upvoteHandler = (data) => {
    setUpvote(data.id, 1, loginId);
    setVote(true);
  };
  useEffect(() => {
    let Id = getEmpId();
    setLoginId(Id);
    if (data.upvote.likedBy.includes(loginId)) setVote(true);
  }, []);
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
