import { useState, useEffect } from "react";

function App() {
  const [colorButton, setColorButton] = useState("red");
  const [isBoxChecked, setIsBoxChecked] = useState(false);
  const nextColorValue = colorButton === "red" ? "blue" : "red";

  // the purpose was to find a way to retrieve label's text content from the checkbox
  // useEffect(() => {
  //   const checkbox = document.getElementById("disable-button-checkbox");
  //   console.log(checkbox.labels[0].textContent);
  // }, [isBoxChecked]);

  const handleCheckbox = (event) => {
    setIsBoxChecked(event.target.checked);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: colorButton }}
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
