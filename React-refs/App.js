import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

const FuncCustomComp = () => {
  let inputRef = null;
  onClick = () => {
    inputRef.focus();
  };
  return (
    <div>
      <div>
        <span>My input</span>
        <input
          type="text"
          ref={input => {
            inputRef = input;
          }}
        />
        <input type="submit" value="submit" onClick={onClick} />
      </div>
    </div>
  );
};
class App extends Component {
  onClick = () => {
    alert(this.firstName.value | this.lastName.value);
  };
  // console.log(this.firstName.value);
  onKeyUp = (target, e) => {
    if (e.keyCode === 13) {
      switch (target) {
        case "firstName":
          this.lastName.focus();
          break;
        case "lastName":
          this.age.focus();
          break;
        case "age":
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
      }
    }
  };

  render() {
    return (
      <div className="App">
        <FuncCustomComp />
        <div>
          <span>Etunimi:</span>
          <input
            type="text"
            ref={input => {
              this.firstName = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "firstName")}
          />
        </div>
        <div>
          <span>Sukunimi:</span>
          <input
            type="text"
            ref={input => {
              this.lastName = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "lastName")}
          />
        </div>
        <div>
          <span>Ikä:</span>
          <input
            type="text"
            ref={input => {
              this.age = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "age")}
          />
        </div>
        <div>
          <input
            type="submit"
            value="submit"
            ref={input => {
              this.submit = input;
            }}
            onKeyUp={this.onKeyUp.bind(this, "submit")}
            onClick={this.onClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
