import React, { Component } from "react";
import Stars from "./Stars";
import Button from "./Button";
import Answer from "./Answer";
import Numbers from "./Numbers";

class Game extends Component {
  render() {
    return (
      <div>
        <h3 className="header">Play Nine</h3>
        <div className="container">
          <Stars />
          <Button />
          <Answer />
          <br />
          <Numbers />
        </div>
      </div>
    );
  }
}

export default Game;
