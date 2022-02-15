import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/ToolTip";
import { BsFillHeartFill } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";
import { setUpvote } from "../Utility/challengeUtils";
import { getEmpId } from "../Utility/utils";
const ChallengeItem = ({ data }) => {
  const [vote, setVote] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  //const target = useRef(null);
  const upvoteHandler = (data) => {
    setUpvote(data.id, 1, loginId);
    setVote(true);
  };
  useEffect(() => {
    let Id = getEmpId();
    setLoginId(Id);
    if (data.upvote.likedBy.includes(loginId)) {
      setVote(true);
    }
  }, [loginId]);
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
              {Object.keys(data.tags).length > 0 &&
                Object.keys(data.tags).map((tag) => (
                  <small className="text-muted m-1" key={tag}>
                    {tag}
                  </small>
                ))}
            </Col>
            <Col md="auto"></Col>
            <Col xs lg="1">
              <div>
                <BsFillHeartFill
                  color={vote ? "red" : "grey"}
                  style={{ cursor: "pointer" }}
                  onClick={
                    vote
                      ? () => setShowOverlay(true)
                      : () => upvoteHandler(data)
                  }
                />
              </div>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};
export default ChallengeItem;
