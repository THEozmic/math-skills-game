import React, { Component } from "react";
import Stars from "./Stars";
import ControlsButtons from "./ControlsButtons";
import Answer from "./Answer";
import Numbers from "./Numbers";
import DoneFrame from "./DoneFrame";

class Game extends Component {
  static randomNumber = () => 1 + Math.round(Math.random() * 9);

  static initialState = () => ({
    selectedNumbers: [],
    numberOfStars: Game.randomNumber(),
    answerIsCorrect: null,
    usedNumbers: [],
    redraws: 5,
    doneStatus: null,
    gameStarted: false,
    timeRemaining: 30
  });

  static timer;

  state = Game.initialState();

  resetGame = () => this.setState(Game.initialState());

  startTimer = () => {
    if (this.state.gameStarted) {
      Game.timer = setInterval(() => {
        if (this.state.timeRemaining === 0) {
          clearInterval(Game.timer);
          if (!this.state.doneStatus) {
            this.setState({
              doneStatus: "Game Over!!"
            });
          }
          return;
        }
        this.setState(prevState => ({
          timeRemaining: prevState.timeRemaining - 1
        }));
      }, 1000);
    }
  };

  selectNumber = clickedNumber => {
    if (!this.state.gameStarted) {
      this.setState(
        {
          gameStarted: true
        },
        this.startTimer
      );
    }
    if (
      clickedNumber &&
      this.state.selectedNumbers.indexOf(clickedNumber) === -1 &&
      this.state.usedNumbers.indexOf(clickedNumber) === -1
    ) {
      this.setState(prevState => ({
        answerIsCorrect: null,
        selectedNumbers: [...prevState.selectedNumbers, clickedNumber],
        gameStarted: true
      }));
    }
  };

  unselectNumber = clickedNumber => {
    if (!clickedNumber) return;
    if (this.state.selectedNumbers.indexOf(clickedNumber) === -1) return;
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(
        number => number !== clickedNumber
      )
    }));
  };

  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect:
        prevState.numberOfStars ===
        prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
  };

  acceptAnswer = () => {
    this.setState(
      prevState => ({
        usedNumbers: [...prevState.usedNumbers, ...prevState.selectedNumbers],
        selectedNumbers: [],
        answerIsCorrect: null,
        numberOfStars: Game.randomNumber()
      }),
      this.updateDoneStatus
    );
  };

  redraw = () => {
    if (this.state.redraws === 0) return;
    this.setState(
      prevState => ({
        selectedNumbers: [],
        answerIsCorrect: null,
        numberOfStars: Game.randomNumber(),
        redraws: prevState.redraws - 1
      }),
      this.updateDoneStatus
    );
  };

  possibleSolutions = ({ numberOfStars, usedNumbers }) => {
    const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(
      number => usedNumbers.indexOf(number) === -1
    );

    return this.possibleCombinationSum(possibleNumbers, numberOfStars);
  };

  possibleCombinationSum = function(arr, n) {
    if (arr.indexOf(n) >= 0) {
      return true;
    }
    if (arr[0] > n) {
      return false;
    }
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return this.possibleCombinationSum(arr, n);
    }
    let listSize = arr.length,
      combinationsCount = 1 << listSize;
    for (let i = 1; i < combinationsCount; i++) {
      let combinationSum = 0;
      for (let j = 0; j < listSize; j++) {
        if (i & (1 << j)) {
          combinationSum += arr[j];
        }
      }
      if (n === combinationSum) {
        return true;
      }
    }
    return false;
  };

  updateDoneStatus = () => {
    this.setState(prevState => {
      if (prevState.usedNumbers.length === 9) {
        return { doneStatus: "Done. Nice!" };
      }

      if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
        return { doneStatus: "Game Over!!" };
      }
    });
  };

  render() {
    return (
      <div>
        <h3 className="header">
          Play Nine
          <span className="timer">{this.state.timeRemaining} s</span>
        </h3>

        <div className="container">
          <Stars numberOfStars={this.state.numberOfStars} />
          <ControlsButtons
            selectedNumbers={this.state.selectedNumbers}
            checkAnswer={this.checkAnswer}
            answerIsCorrect={this.state.answerIsCorrect}
            acceptAnswer={this.acceptAnswer}
            redraw={this.redraw}
            redraws={this.state.redraws}
          />
          <Answer
            selectedNumbers={this.state.selectedNumbers}
            unselectNumber={this.unselectNumber}
          />
          <br />
          {this.state.doneStatus ? (
            <DoneFrame
              doneStatus={this.state.doneStatus}
              resetGame={this.resetGame}
            />
          ) : (
            <Numbers
              selectedNumbers={this.state.selectedNumbers}
              usedNumbers={this.state.usedNumbers}
              selectNumber={this.selectNumber}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Game;
