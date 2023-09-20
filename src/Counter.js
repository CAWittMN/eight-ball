import "./Counter.css";

const Counter = ({ counts }) => (
  <div className="Counter">
    <ul>
      {Object.entries(counts).map(([color, count]) => (
        <li key={color}>
          <span style={{ color: color }}>{color}</span>
          <span>: {count}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Counter;
