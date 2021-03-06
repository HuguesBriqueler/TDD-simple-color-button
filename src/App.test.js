import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

describe("colorButton behaviour", () => {
  test("Button has correct initial text & color", () => {
    render(<App />);

    // find element with a role of button and text of 'Change to blue'
    const colorButton = screen.getByRole("button", { name: "Change to blue" });

    // expect the background color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  });

  test("Button turns blue when clicked", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", {
      name: "Change to blue",
    });
    // click the button
    fireEvent.click(colorButton);
    // expect background change to blue and text change to 'Change to red'
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
    expect(colorButton).toHaveTextContent("Change to red");
  });
});

describe("checkbox behaviour", () => {
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
    // click the checkbox, so it's checked
    const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
    fireEvent.click(checkbox);

    // expect button to be disabled & checkbox name to be 'Enable button'
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(checkbox.labels[0]).toHaveTextContent("Enable button");

    // clicking again should restore conditions
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
    expect(checkbox.labels[0]).toHaveTextContent("Disable button");
  });
});

describe("Button color turn to 'gray' when checkbox is checked", () => {
  test("Button turn from red to gray when disabled", () => {
    // Arrange
    render(<App />);
    const colorButton = screen.getByRole("button");
    const checkbox = screen.getByRole("checkbox");
    // Act
    fireEvent.click(checkbox);
    // Assert
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  });
  test("Button turn from blue to gray when disabled", () => {
    // Arrange
    render(<App />);
    const colorButton = screen.getByRole("button");
    const checkbox = screen.getByRole("checkbox");
    // Act
    fireEvent.click(colorButton);
    fireEvent.click(checkbox);
    // Assert
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  });
});

describe("add spaces before camel-case capital letters", () => {
  test("Works for no inner capital letter", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
