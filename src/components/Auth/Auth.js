import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../../ducks/reducer";
import './Auth.css'


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      profilePic: "",
      newUser: false,
    };
  }

  toggle = () => {
    this.setState({
      newUser: !this.state.newUser,
    });
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = () => {
    const { username, password } = this.state;
    axios
      .post("/auth/login", { username, password })
      .then((res) => {
        this.props.loginUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("Login Failed");
      });
  };

  register = () => {
    const { username, password, profilePic } = this.state;
    axios
      .post("/auth/register", { username, password, profilePic })
      .then((res) => {
        this.props.loginUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("Register Failed");
      });
  };

  render() {
    console.log(this.props.location)
    const { username, password, profilePic, newUser } = this.state;
    return (
      <div className="auth">
        <div className="auth-container">
            {!newUser ?
        <form>
          <input onChange={(e) => this.changeHandler(e)} name="username" type="text" value={username} placeholder="Username..."/>
          <input onChange={(e) => this.changeHandler(e)} name="password" type="password" value={password} placeholder="Password..."/>
          <div className = 'btn-container'>
            <button onClick={this.login}>Login</button>
            <button onClick={this.toggle}>Signup</button>
          </div>
        </form>
         :
         <form>
         <input onChange={(e) => this.changeHandler(e)} name="username" type="text" value={username} placeholder="Username..."/>
         <input onChange={(e) => this.changeHandler(e)} name="password" type="password" value={password} placeholder="Password..."/>
         <input onChange={(e) => this.changeHandler(e)} name = 'profilePic' type='text' value={profilePic} placeholder="Profile URL..."/>
         <div className = 'btn-container'>
           <button onClick={this.register}>Register</button>
           <button onClick={this.toggle}>Whoops! I have an account.</button>
         </div>
       </form>
        }
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { loginUser })(Auth);
