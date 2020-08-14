import React, { Component } from "react";
import axios from "axios";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      newUser: false
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
      const {username, password} = this.state
    return (
        <div>
      <form>
        <input
          onChange={(e) => this.changeHandler(e)}
          name="username"
          type="text"
          value={username}
          placeholder="Username"
        />
        <input
          onChange={(e) => this.changeHandler(e)}
          name="password"
          type="password"
          value={password}
          placeholder="Password"
        />
        <div>
            <button>Login</button>
            <button>Register</button>
        </div>
      </form>
      </div>

    );
  }
}

export default Auth;
