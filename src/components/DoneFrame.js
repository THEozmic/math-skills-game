import React from "react";

const DoneFrame = props => {
  return (
    <div className="item done-frame">
      <div>{props.doneStatus}</div>
      <button className="button--small" onClick={props.resetGame}>
        Play Again
      </button>
    </div>
  );
};

export default DoneFrame;
