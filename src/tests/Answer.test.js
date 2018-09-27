import React from "react";
import ReactDOM from "react-dom";
import Answer from "../components/Answer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Answer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
