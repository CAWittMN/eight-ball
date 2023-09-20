import React from "react";
import "./App.css";
import EightBall from "./EightBall";
import ResetButton from "./ResetButton";
import Counter from "./Counter";
const { useState } = React;

const initVal = {
  msg: "Think of a Question",
  color: "dimgray",
};

const App = () => {
  const [answer, setAnswer] = useState(initVal);
  const [counter, setCounter] = useState({});

  const handleCounter = (answer) => {
    const { color } = answer;
    const newCounter = { ...counter };
    newCounter[color] = newCounter[color] + 1 || 1;
    setCounter(newCounter);
  };

  return (
    <div className="App">
      <div className="App-ball-container">
        <EightBall
          answer={answer}
          handleCounter={handleCounter}
          setAnswer={setAnswer}
        />
        <ResetButton
          setAnswer={setAnswer}
          setCounter={setCounter}
          initVal={initVal}
        />
      </div>
      <div className="App-counter-container">
        <Counter counts={counter} />
      </div>
    </div>
  );
};

export default App;
