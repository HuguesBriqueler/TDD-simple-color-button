import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Button has correct initial text & color", () => {
  render(<App />);

  // find element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("Button turns blue when clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  // click the button
  fireEvent.click(colorButton);
  // expect background change to blue and text change to 'Change to red'
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton.textContent).toBe("Change to red");
});

test("Initials conditions", () => {
  render(<App />);
  // button migth be enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();
  // checkbox might be unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Button is disabled when checkbox is checked", () => {
  render(<App />);
  // click th checkbox so it's checked
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  // expect button to be disabled
  const button = screen.getByRole("button");
  expect(button).toBeDisabled();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
