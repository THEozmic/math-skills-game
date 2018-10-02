import React from "react";
import ReactDOM from "react-dom";
import ControlsButton from "../components/ControlsButton";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ControlsButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
