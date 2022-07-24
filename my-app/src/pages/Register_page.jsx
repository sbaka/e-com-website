//TODO : ON SUBMIT CHECK IF ALL THE INPUTS ARE VALID
import fbLogo from "../assets/facebook.png";
import googleLogo from "../assets/google.png";
import arrowPic from "../assets/arrow_signIn.png";
import "../css/Register_page_style.css";
import "https://kit.fontawesome.com/728d58002e.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faUnlock,
  faArrowLeft,
  faUser,
  faEye,
  faCheck,
  faEyeSlash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";

const numSymbolReg = /([0-9]|[#?!@$%^/&*-])/;
const uppercaseReg = /([A-Z])/;
const userNameReg =
  /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
const mailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
class Register extends Component {
  state = {
    /*state for icons highlight */
    user: false,
    userValue: "",
    userValueBool: false,
    userAccepted: false,
    email: false,
    emailValue: "",
    emailValueBool: false,
    emailAccepted: false,
    password: false,
    passwordString: "",
    passwordConditions: false,
    lengthCondition: false,
    numSymbolCondition: false,
    uppercaseCondition: false,
    retype: false,
    retypeValueBool: false,
    eye: false,
  };

  ChangePasswordToText = () => {
    /*switch beetween icons + password or text type*/
    this.setState({
      eye: !this.state.eye,
    });
  };

  passwordChange = (event) => {
    this.setState({ passwordString: event.target.value });

    if (event.target.value.length > 0)
      //show conditions condition
      this.setState({ passwordConditions: true });
    else this.setState({ passwordConditions: false });

    if (event.target.value.length >= 8 && !event.target.value.includes(" "))
      //the 8 caracters condition
      this.setState({ lengthCondition: true });
    else this.setState({ lengthCondition: false });

    if (numSymbolReg.test(event.target.value)) {
      //the 8 caracters condition
      this.setState({ numSymbolCondition: true });
      console.log(event.target.value, numSymbolReg.test(event.target.value));
    } else this.setState({ numSymbolCondition: false });

    if (uppercaseReg.test(event.target.value))
      //the 8 caracters condition
      this.setState({ uppercaseCondition: true });
    else this.setState({ uppercaseCondition: false });
  };

  retypeChange = (event) => {
    console.log(this.state.passwordString);
    if (event.target.value == this.state.passwordString)
      this.setState({ retypeValueBool: true });
    else this.setState({ retypeValueBool: false });
  };
  userChange = (event) => {
    this.setState({ userValue: event.target.value }); //set username value in the state

    if (event.target.value == 0)
      this.setState({
        userValueBool: false,
      });
    //set userValueBool to false or true to decide if we show thie right icon or not
    else this.setState({ userValueBool: true });

    if (userNameReg.test(event.target.value)) {
      this.setState({ userAccepted: true });
    }
    //check if the username matches with the regex if yes itshows the green color if no it shows the gray one
    else this.setState({ userAccepted: false });
  };
  mailChange = (event) => {
    //same as userChange
    this.setState({ emailValue: event.target.value });
    if (event.target.value == 0) this.setState({ emailValueBool: false });
    else this.setState({ emailValueBool: true });

    if (mailReg.test(event.target.value)) {
      this.setState({ emailAccepted: true });
      console.log(event.target.value);
    }
    //check if the username matches with the regex if yes itshows the green color if no it shows the gray one
    else this.setState({ emailAccepted: false });
  };
  render() {
    return (
      <div className="parent">
        <div className="container">
          <button className="return">
            <FontAwesomeIcon icon={faArrowLeft} fontSize={30} />
          </button>
          <h2>Sign up</h2>
          <h4>Fill in the form bellow to continue</h4>

          <br />

          <div className="formGroup">
            <input
              id="username"
              placeholder="Username"
              autoComplete="off"
              onFocus={() =>
                this.setState({ user: true })
              } /*user icon highlight added*/
              onBlur={() =>
                this.setState({ user: false })
              } /*user icon highlight removed */
              value={this.state.userValue}
              onChange={this.userChange}
            />
            <label htmlFor="username" className="labelIcon">
              <FontAwesomeIcon
                icon={faUser}
                fontSize={30}
                color={this.state.user ? "#2c3e50" : "#C3C3C3"}
              />
            </label>
            <label htmlFor="username" className="RightIcon">
              {this.state.userValueBool ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  fontSize={30}
                  color={this.state.userAccepted ? "green" : "#C3C3C3"}
                />
              ) : (
                ""
              )}
            </label>
          </div>

          <br />

          <div className="formGroup">
            <input
              id="email"
              placeholder="E-mail"
              autoComplete="off"
              onFocus={() => this.setState({ email: true })}
              onBlur={() => this.setState({ email: false })}
              value={this.state.emailValue}
              onChange={this.mailChange}
            />

            <label htmlFor="email" className="labelIcon">
              <FontAwesomeIcon
                icon={faAt}
                fontSize={30}
                color={this.state.email ? "#2c3e50" : "#C3C3C3"}
              />
            </label>
            <label htmlFor="email" className="RightIcon">
              {this.state.emailValueBool ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  fontSize={30}
                  color={this.state.emailAccepted ? "green" : "#C3C3C3"}
                />
              ) : (
                ""
              )}
            </label>
          </div>

          <br />

          <div className="formGroup">
            <input
              type={this.state.eye ? "text" : "password"}
              placeholder="Password"
              onFocus={() => this.setState({ password: true })}
              onBlur={() => this.setState({ password: false })}
              onChange={this.passwordChange}
            ></input>
            <label htmlFor="password" className="labelIcon">
              <FontAwesomeIcon
                icon={faUnlock}
                fontSize={30}
                color={this.state.password ? "#2c3e50" : "#C3C3C3"}
              />
            </label>
            <label htmlFor="password" className="RightIcon eye">
              <FontAwesomeIcon
                icon={this.state.eye ? faEye : faEyeSlash}
                fontSize={30}
                color={this.state.eye ? "#2c3e50" : "#C3C3C3"}
                onClick={this.ChangePasswordToText}
              />
            </label>
          </div>

          {this.state.passwordConditions ? (
            <div>
              <h4
                style={{ color: this.state.lengthCondition ? "green" : "red" }}
              >
                <FontAwesomeIcon
                  icon={this.state.lengthCondition ? faCheck : faXmark}
                />
                at least 8 characters
              </h4>
              <h4
                style={{
                  color: this.state.numSymbolCondition ? "green" : "red",
                }}
              >
                <FontAwesomeIcon
                  icon={this.state.numSymbolCondition ? faCheck : faXmark}
                />
                at least one number or symbol
              </h4>
              <h4
                style={{
                  color: this.state.uppercaseCondition ? "green" : "red",
                }}
              >
                <FontAwesomeIcon
                  icon={this.state.uppercaseCondition ? faCheck : faXmark}
                />
                at least one upper case
              </h4>
            </div>
          ) : (
            ""
          )}
          <br />

          <br />

          <div className="formGroup">
            <input
              type="password"
              placeholder="Retype your password"
              onFocus={() => this.setState({ retype: true })}
              onBlur={() => this.setState({ retype: false })}
              onChange={this.retypeChange}
            ></input>
            <label htmlFor="password" className="labelIcon">
              <FontAwesomeIcon
                icon={faUnlock}
                fontSize={30}
                color={this.state.retype ? "#2c3e50" : "#C3C3C3"}
              />
            </label>
            <label htmlFor="password" className="RightIcon">
              {this.state.retypeValueBool ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  fontSize={30}
                  color={this.state.retype ? "green" : "#C3C3C3"}
                />
              ) : (
                ""
              )}
            </label>
          </div>

          <div className="signUp">
            <p>
              Already a member ? <a href="/Login">Sign in</a>
            </p>
          </div>

          <div className="bottomDiv">
            <button type="submit" className="submitBtn">
              <p>Sign up </p>
              <img id="arrow" src={arrowPic} alt="" />
            </button>
            Or
            <div>
              <img src={fbLogo} alt="fb" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={googleLogo} alt="google" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
