import React from "react";

const Hello = (props) => {
  return (
    <div>
      <h1 className="firstH1">{props.name} Likes JSX!</h1>
      {props.children}
    </div>
  );
};
export default Hello;
