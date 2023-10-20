import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should render", () => {
    render(<HomePage />);
    const heading = screen.getByRole("heading", {
      name: "hello world",
    });
    expect(heading).toBeInTheDocument();
  });
});
