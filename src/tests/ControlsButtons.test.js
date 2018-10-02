import React from "react";
import ReactDOM from "react-dom";
import ControlsButtons from "../components/ControlsButtons";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ControlsButtons />, div);
  ReactDOM.unmountComponentAtNode(div);
});
