import React, { Fragment } from "react";

const User = props => {
  let age = props.age >= 0 ? props.age : "NA";
  if (props.children) {
    return (
      <li key={props.id}>
        <span>
          name: {props.children} | age: {age}
        </span>
        <input onChange={props.changeEvent} value={props.children} />
        <button onClick={props.delEvent}>Delete</button>
      </li>
    );
  } else {
    return <li>Invalid Entry</li>;
  }
};

export default User;
