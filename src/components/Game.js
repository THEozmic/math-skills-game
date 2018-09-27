import React, { Component } from "react";
import Stars from "./Stars";
import Button from "./Button";
import Answer from "./Answer";

class Game extends Component {
  render() {
    return (
      <div>
        <h3 className="header">Play Nine</h3>
        <div className="container">
          <Stars />
          <Button />
          <Answer />
        </div>
      </div>
    );
  }
}

export default Game;
