import React from "react";

function FunctionClick() {
  function clickMe() {
    console.log("The Button was clicked.");
  }
  return (
    <div>
      <button onClick={clickMe}>Click Me!</button>
    </div>
  );
}

export default FunctionClick;
