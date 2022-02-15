import { render, screen } from "@testing-library/react";
import Header from "./Header";
const mockedNavigator = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // technically it passes without this too, but I'm not sure if its there for other tests to use the real thing so I left it in
  useNavigate: () => mockedNavigator,
}));
describe("Header component", () => {
  test("Title of the brand", () => {
    render(<Header />);
    const linkElement = screen.getByText("HackIdeas");
    expect(linkElement).toBeInTheDocument();
  });
});
