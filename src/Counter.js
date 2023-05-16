<<<<<<< HEAD
import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>Count is {value}</p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
=======
import React, { useReducer } from "react";

const INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        Counter Value is <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: INCREMENT })}>+1</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>-1</button>
>>>>>>> 0063ddb506ed8e0d54e3d20c16bf520fd8c23e04
    </div>
  );
};

export default Counter;
