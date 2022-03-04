import { useState } from "react";

function App() {
  const [colorButton, setColorButton] = useState("red");
  // const [isBoxChecked, setIsBoxChecked] = useState(false);
  const nextColorValue = colorButton === "red" ? "blue" : "red";

  const handleCheckbox = (event) => {
    // setIsBoxChecked(event.value);
    const buttonElement = document.querySelector("button");
    if (event.target.checked) {
      buttonElement.setAttribute("disabled", "");
    } else {
      buttonElement.removeAttribute("disabled");
    }
  };
  return (
    <div>
      <button
        style={{ backgroundColor: colorButton }}
        onClick={() => setColorButton(nextColorValue)}
      >
        Change to {nextColorValue}
      </button>
      <input type={"checkbox"} onChange={handleCheckbox} />
    </div>
  );
}

export default App;
