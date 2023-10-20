import { render, screen, fireEvent } from "@testing-library/react";

// component
import CounterPage from "./CounterPage";

describe("CounterPage", () => {
  beforeEach(() => {
    render(<CounterPage />);
  });

  it("should render", () => {
    const message = screen.getByText("Counter");
    expect(message).toBeInTheDocument();
  });

  it("should have initial count of 0", () => {
    const count = screen.getByText("Count: 0");
    expect(count).toBeInTheDocument();
  });

  it("should have increment button", () => {
    const button = screen.getByText("increment");
    expect(button).toBeInTheDocument();
  });
  it("should have decrement button", () => {
    const button = screen.getByText("decrement");
    expect(button).toBeInTheDocument();
  });

  it("should increment count by 1 when clicking increment button once", () => {
    const button = screen.getByText("increment");
    fireEvent.click(button);
    const count = screen.getByText("Count: 1");
    expect(count).toBeInTheDocument();
  });

  it("should increment count by 2 when clicking increment button twice", () => {
    const button = screen.getByText("increment");
    fireEvent.click(button);
    fireEvent.click(button);
    const count = screen.getByText("Count: 2");
    expect(count).toBeInTheDocument();
  });

  it("should not be more than 10 when clicking increment button 11 times", () => {
    const button = screen.getByText("increment");
    for (let i = 0; i < 11; i++) {
      fireEvent.click(button);
    }
    const count = screen.getByText("Count: 10");
    expect(count).toBeInTheDocument();
  });

  it("should not be less than 0 when clicking decrement button once", () => {
    const button = screen.getByText("decrement");
    fireEvent.click(button);
    const count = screen.getByText("Count: 0");
    expect(count).toBeInTheDocument();
  });

  it("should decrement count by 1 when clicking decrement button once", () => {
    const button = screen.getByText("increment");
    fireEvent.click(button);
    fireEvent.click(button);
    const decrementButton = screen.getByText("decrement");
    fireEvent.click(decrementButton);
    const count = screen.getByText("Count: 1");
    expect(count).toBeInTheDocument();
  });
});
