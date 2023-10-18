import { render, screen } from "@testing-library/react";
import App from "../App";

it("should render hello world", () => {
  render(<App />);
  const message = screen.getByText(/hello world/i);
  expect(message).toBeInTheDocument();
});
