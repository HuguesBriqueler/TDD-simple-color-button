import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [colorButton, setColorButton] = useState("red");
  const [isBoxChecked, setIsBoxChecked] = useState(false);
  const nextColorValue = colorButton === "red" ? "blue" : "red";

  const handleCheckbox = (event) => {
    setIsBoxChecked(event.target.checked);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: isBoxChecked ? "gray" : colorButton }}
        onClick={() => setColorButton(nextColorValue)}
        disabled={isBoxChecked}
      >
        Change to {nextColorValue}
      </button>
      <input
        type={"checkbox"}
        id="disable-button-checkbox"
        defaultChecked={isBoxChecked}
        aria-checked={isBoxChecked} // for accessibility (e.g. screen reader)
        onChange={handleCheckbox}
      />
      <label htmlFor="disable-button-checkbox">
        {isBoxChecked ? "Enable button" : "Disable button"}
      </label>
    </div>
  );
}

export default App;
