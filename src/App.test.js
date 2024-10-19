import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders input elements correctly", () => {
  render(<App />);
  const txtElement = screen.getByRole("textbox");
  expect(txtElement).toBeInTheDocument();
});

test("renders button componet correctly", () => {
  render(<App />);
  const buttonEle = screen.getByRole("button");
  expect(buttonEle).toHaveTextContent('Submit');
});
