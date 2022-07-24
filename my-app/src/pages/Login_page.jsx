import fbLogo from "../assets/facebook.png";
import googleLogo from "../assets/google.png";
import arrowPic from "../assets/arrow_signIn.png";
import React, { Component } from "react";
import "../css/Login_page_style.css"; //css
import "https://kit.fontawesome.com/728d58002e.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faUnlock,
  faArrowLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
  state = {
    eye: false /*to handle the changes on click of the icon*/,
    email: false,
    password: false,
  };

  ChangePasswordToText = () => {
    /*switch beetween icons + password or text type*/
    this.setState({ eye: !this.state.eye });
  };
  render() {
    return (
      <div className="parent">
        <div className="container_login">
          <button className="return">
            <FontAwesomeIcon icon={faArrowLeft} fontSize={30} />
          </button>
          <h2>Sign in</h2>
          <h4>Fill in the form bellow to continue</h4>
          <br />
          <div className="formGroup">
            <input
              id="email"
              placeholder="E-mail"
              onFocus={() => this.setState({ email: true })}
              onBlur={() => this.setState({ email: false })}
            />
            <label htmlFor="email" className="labelIcon">
              <FontAwesomeIcon
                icon={faAt}
                fontSize={30}
                color={this.state.email ? "#2c3e50" : "#C3C3C3"}
              />
            </label>
          </div>

          <br />

          <div className="formGroup">
            <input
              type={this.state.eye ? "text" : "password"}
              placeholder="Password"
              onFocus={() => this.setState({ password: true })}
              onBlur={() => this.setState({ password: false })}
            />
            <label htmlFor="password" className="labelIcon">
              <FontAwesomeIcon
                icon={faUnlock}
                fontSize={30}
                color={this.state.password ? "#2c3e50" : "#C3C3C3"}
              />
            </label>
            <label className="eye">
              <FontAwesomeIcon
                icon={this.state.eye ? faEye : faEyeSlash}
                fontSize={30}
                color={this.state.eye ? "#2c3e50" : "#C3C3C3"}
                className="eyeicon"
                onClick={this.ChangePasswordToText}
              />
            </label>
          </div>

          <br />

          <div className="signUp">
            <p>
              You don't have an account yet ? <a href="/Register">Sign up</a>
            </p>
          </div>

          <br />

          <div className="bottomDiv">
            <button type="submit" className="submitBtn">
              <p>Sign in </p>
              <img id="arrow" src={arrowPic} alt="" />
            </button>
            Or
            <div>
              <img src={fbLogo} alt="fb" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={googleLogo} alt="google" />
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}
export default Login;
