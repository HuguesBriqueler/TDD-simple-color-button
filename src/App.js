import { useState } from "react";

function App() {
  const [colorButton, setColorButton] = useState("red");
  const [isBoxChecked, setIsBoxChecked] = useState(false);
  const nextColorValue = colorButton === "red" ? "blue" : "red";

  const handleCheckbox = (event) => {
    setIsBoxChecked(event.target.checked);
    // const buttonElement = document.querySelector("button");
    // if (event.target.checked) {
    //   buttonElement.setAttribute("disabled", "");
    // } else {
    //   buttonElement.removeAttribute("disabled");
    // }
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
        id="enable-button-checkbox"
        defaultChecked={isBoxChecked}
        aria-checked={isBoxChecked} // for accessibility (e.g. screen reader)
        onChange={handleCheckbox}
      />
    </div>
  );
}

export default App;
