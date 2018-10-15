import React, { Component, Fragment } from "react";
import User from "./components/user";
import UniqueID from "react-html-id";

class App extends Component {
  constructor() {
    super();
    UniqueID.enableUniqueIds(this);
    this.state = {
      users: [
        { id: this.nextUniqueId(), name: "", age: 0 },
        { id: this.nextUniqueId(), name: "Mari", age: 20 },
        { id: this.nextUniqueId(), name: "Petteri", age: 30 },
        { id: this.nextUniqueId(), name: "", age: 0 },
        { id: this.nextUniqueId(), name: "Jouko", age: 40 }
      ]
    };

    console.log(this.state);
  }
  //id is a quique key that can track changes and update only the changesd parts
  //so it doesnt have to render the enitrer list

  deleteUser = (index, e) => {
    console.log(this.nextUniqueId());
    //const users = [...this.state.users];
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({ users: users });
  };

  changeUserName = (id, event) => {
    if (event.target.value.length === 0) {
      return;
    }
    const index = this.state.users.findIndex(user => {
      return user.id === id;
    });

    const user = Object.assign({}, this.state.users[index]);
    user.name = event.target.value;

    const users = Object.assign([], this.state.users);
    users[index] = user;

    this.setState({ users: users });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, index) => {
            return (
              <div>
                <User
                  delEvent={this.deleteUser.bind(this, index)}
                  age={user.age}
                  changeEvent={this.changeUserName.bind(this, user.id)}
                  key={user.id} /*Unique key is to avoid the warning*/
                >
                  {user.name}
                </User>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default App;
