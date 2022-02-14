import Layout from "../Layout/Layout";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import ChallengeItem from "./ChallengeItem";
import { useEffect, useState } from "react";
import { getChallenges, get } from "../Utility/challengeUtils";
const Challenge = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getChallenges(func);
  }, []);

  const func = (x) => {
    if (x.length > 0) {
      setData(x);
    }
  };
  return (
    <Layout>
      <Container className="mt-5">
        <CardGroup className="mb-4">
          <Row xs={1} md={2} className="g-4">
            {data.length > 0 &&
              data.map((item) => <ChallengeItem data={item} />)}
            {/*  {data.length > 0 ? (
          data.map((item) => <ChallengeItem data={item} />)
        ) : (
          <h1>No data found </h1>
        )} */}
          </Row>
        </CardGroup>
      </Container>
    </Layout>
  );
};
export default Challenge;
