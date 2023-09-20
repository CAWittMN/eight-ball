import React from "react";
import "./EightBall.css";
import defaultAnswers from "./answers";

const EightBall = (props) => {
  const { answers = defaultAnswers, answer, setAnswer, handleCounter } = props;

  const handleClick = () => {
    const randomIdx = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIdx];
    setAnswer(answer);
    handleCounter(answer);
  };

  return (
    <div className="EightBall" onClick={handleClick}>
      <div className="EightBall-text" style={{ backgroundColor: answer.color }}>
        {answer.msg}
      </div>
    </div>
  );
};

export default EightBall;
