import Card from "react-bootstrap/Card";
const ChallengeItem = ({ title, description, tags }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{tags}</small>
      </Card.Footer>
    </Card>
  );
};
export default ChallengeItem;
