import { render, screen } from "@testing-library/react";
import Login from "./Login";
import userEvent from "@testing-library/user-event";

const mockedNavigator = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // technically it passes without this too, but I'm not sure if its there for other tests to use the real thing so I left it in
  useNavigate: () => mockedNavigator,
}));

describe("Login component", () => {
  test("on the submit button", () => {
    const { asFragment } = render(<Login />);
    const firstRender = asFragment();
    const buttonEle = screen.getByText("Submit");
    userEvent.click(buttonEle);
    expect(firstRender).toMatchSnapshot(asFragment());
  });
});
