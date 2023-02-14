import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Binary to decimal converter renders", () => {
  test("convert binary to decimal title", () => {
    render(<App />);
    const title = screen.getByText(/convert binary to decimal/i);
    expect(title).toBeInTheDocument();
  });

  test("output of 1 for a user input of '1'", () => {
    testValidInput("1", "1");
  });

  test("output of 5 for a user input of '101'", () => {
    testValidInput("101", "5");
  });

  test("output of 2730 for a user input of '0101010101010'", () => {
    testValidInput("0101010101010", "2730");
  });

  test("error message and blank output for a user input of '12'", () => {
    testInvalidInput("12");
  });

  test("error message and blank output for a user input of 'abc'", () => {
    testInvalidInput("abc");
  });
});

const testValidInput = (input, expectedResult) => {
  render(<App />);
  const inputField = screen.getByLabelText(/binary number/i);
  const outputField = screen.getByLabelText(/result/i);
  userEvent.type(inputField, input);
  expect(inputField).toHaveValue(input);
  expect(outputField).toHaveValue(expectedResult);
}

const testInvalidInput = (input) => {
  render(<App />);
  const inputField = screen.getByLabelText(/binary number/i);
  userEvent.type(inputField, input);
  const errorMessage = screen.getByText(/Not a binary number/i);
  expect(inputField).toHaveValue(input);
  expect(errorMessage).toBeInTheDocument();
}
