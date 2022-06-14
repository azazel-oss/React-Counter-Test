import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/simple counter/i);
  });
  it("has 2 buttons", () => {
    render(<App />);
    expect(screen.queryAllByRole("button").length).toBe(2);
  });
  test("if increment button is working properly", () => {
    render(<App />);
    const counter = screen.getByTestId("counter-value");
    const button = screen.getByRole("button", { name: /increment/i });
    userEvent.click(button);
    userEvent.click(button);
    expect(counter.textContent).toEqual("2");
  });
  test("if decrement button is working properly", () => {
    render(<App />);
    const counter = screen.getByTestId("counter-value");
    const button = screen.getByText(/decrement/i);
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);
    expect(counter.textContent).toEqual("-3");
  });
});
