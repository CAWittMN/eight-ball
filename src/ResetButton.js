import "./ResetButton.css";
const ResetButton = ({ setAnswer, setCounter, initVal }) => (
  <button
    className="ResetButton"
    onClick={() => {
      setAnswer(initVal);
      setCounter({});
    }}
  >
    Reset
  </button>
);

export default ResetButton;
