import React from "react";

export function Nav({ currentInput }) {
  return (
    <div className="inpDiv">
      <input className="calcInput" value={currentInput} />
    </div>
  );
}

export function Buttons(props) {
  function Calculation() {
    props.changeInput(props.value, props.ender, props.control, props.clear, props.plus, props.minus, props.multi, props.divide, props.mod, props.dot);
  }

  return (
    <button className={props.class} onClick={Calculation}>
      {props.value}
    </button>
  );
}
