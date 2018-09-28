import React from "react";

const Numbers = props => {
  const { selectedNumbers = [], usedNumbers = [], selectNumber } = props;

  const numberClass = number => {
    if (usedNumbers.indexOf(number) > -1) {
      return "number--disabled";
    }

    if (selectedNumbers.indexOf(number) > -1) {
      return "number--selected";
    }
  };
  return (
    <div className="item numbers">
      {Numbers.list.map((number, index) => (
        <span
          onClick={() => selectNumber(number)}
          className={`number ${numberClass(number)}`}
          key={index}
        >
          {number}
        </span>
      ))}
    </div>
  );
};

Numbers.list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default Numbers;
