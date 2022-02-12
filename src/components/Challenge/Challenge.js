import Layout from "../Layout/Layout";
import Container from "react-bootstrap/Container";
import ChallengeItem from "./ChallengeItem";

const Challenge = () => {
  return (
    <Layout>
      <Container className="mt-5">
        <ChallengeItem title="Any title" description="hello" tags="tags" />
      </Container>
    </Layout>
  );
};
export default Challenge;
