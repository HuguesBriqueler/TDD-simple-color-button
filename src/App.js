import { useState } from "react";

function App() {
  const [colorButton, setColorButton] = useState("red");
  const nextColorValue = colorButton === "red" ? "blue" : "red";
  return (
    <div>
      <button
        style={{ backgroundColor: colorButton }}
        onClick={() => setColorButton(nextColorValue)}
      >
        Change to {nextColorValue}
      </button>
    </div>
  );
}

export default App;
