import React, { Component } from "react";

class ClassClick extends Component {
  clickMe() {
    console.log("The BUTTON was clicked.");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickMe}>Click!</button>
      </div>
    );
  }
}

export default ClassClick;
