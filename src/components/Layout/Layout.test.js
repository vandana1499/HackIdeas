import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
const mockedNavigator = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // technically it passes without this too, but I'm not sure if its there for other tests to use the real thing so I left it in
  useNavigate: () => mockedNavigator,
}));
describe("Layout component", () => {
  function MockApp() {
    return <p>Hello from your Mock App</p>;
  }

  test("can render wrapped components", () => {
    const { getByText } = render(
      <Layout>
        <MockApp />
      </Layout>
    );

    expect(getByText(/Hello from your Mock App/i)).toBeInTheDocument();
  });
});
