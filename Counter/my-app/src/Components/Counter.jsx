import React, { useState } from "react";
const Counter = () => {
  const [count, setcount] = useState(0);
  const even_odd = (count) => {
    for (let i = 1; i <= count; i++) {
      if (count % 2 == 0) {
        return "Even";
      } else {
        return "Odd";
      }
    }
  };

  const checkprime = (count) => {
    let factor = 0;
    for (let i = 1; i <= count; i++) {
      if (count % i == 0) {
        factor++;
      }
    }
    if (factor == 2) {
      return "true";
    } else {
      return "false";
    }
  };
  return (
    <div style={{backgroundColor:"beige" }}>
      <h1 style={{ fontSize: "50px" }}>Welcome to Counter 2.0</h1>
      <button
        style={{ margin: "10px", padding: "5px" }}
        disabled={count === 0}
        onClick={() => setcount(count - 1)}
      >
        -1
      </button>{" "}
      <button
        style={{ margin: "10px", padding: "5px" }}
        onClick={() => setcount(count + 1)}
      >
        +1
      </button>  
      <br /> <br />
      <button
        style={{ margin: "10px", padding: "10px 15px" }}
        onClick={() => setcount(0)}
      >
        Reset
      </button>
      <h1>Count: {count}</h1>
      <p style={{ fontSize: "20px" }}>This number is : {even_odd(count)} </p>
      <p style={{ fontSize: "20px" }}>Prime number : {checkprime(count)}</p>
    </div>
  );
};
export default Counter;

