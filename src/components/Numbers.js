import React, { Component } from "react";

class Numbers extends Component {
  render() {
    return (
      <div className="item numbers">
        <span className="number">2</span>
        <span className="number number--selected">1</span>
        <span className="number">5</span>
        <span className="number number--disabled">9</span>
      </div>
    );
  }
}

export default Numbers;
