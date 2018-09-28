import React, { Component } from "react";

const Answer = ({ selectedNumbers = [], unselectNumber }) => {
  return (
    <div className="item answer">
      {selectedNumbers.map((number, index) => (
        <span
          className="number"
          key={index}
          onClick={() => unselectNumber(number)}
        >
          {number}
        </span>
      ))}
    </div>
  );
};

export default Answer;
