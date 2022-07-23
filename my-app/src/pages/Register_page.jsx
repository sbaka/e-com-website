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
} from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";

//<script src="https://kit.fontawesome.com/728d58002e.js" crossorigin="anonymous"></script>

const passwordReg =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]|.*?[#?!@$%^&*-]).{8,}$/gm;

const handleAnimation = (event) => {
  event.currentTarget.style.color = "salmon";
};

class Register extends Component {
  state = {
    /*state for icons highlight */ user: false,
    email: false,
    password: false,
    retype: false,
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
              onFocus={() =>
                this.setState({ user: true })
              } /*user icon highlight added*/
              onBlur={() =>
                this.setState({ user: false })
              } /*user icon highlight removed */
            ></input>
            <label htmlFor="username" className="labelIcon">
              {this.state.user ? (
                <FontAwesomeIcon icon={faUser} fontSize={30} color="#2c3e50" />
              ) : (
                <FontAwesomeIcon icon={faUser} fontSize={30} color="#C3C3C3" />
              )}
            </label>
            <label htmlFor="username" className="RightIcon">
              {this.state.user ? (
                <FontAwesomeIcon icon={faCheck} fontSize={30} color="green" />
              ) : (
                <FontAwesomeIcon icon={faCheck} fontSize={30} color="#C3C3C3" />
              )}
            </label>
          </div>

          <br />

          <div className="formGroup">
            <input
              id="email"
              placeholder="E-mail"
              onFocus={() => this.setState({ email: true })}
              onBlur={() => this.setState({ email: false })}
            ></input>
            <label htmlFor="email" className="labelIcon">
              {this.state.email ? (
                <FontAwesomeIcon icon={faAt} fontSize={30} color="#2c3e50" />
              ) : (
                <FontAwesomeIcon icon={faAt} fontSize={30} color="#C3C3C3" />
              )}
            </label>
            <label htmlFor="username" className="RightIcon">
              {this.state.email ? (
                <FontAwesomeIcon icon={faCheck} fontSize={30} color="green" />
              ) : (
                <FontAwesomeIcon icon={faCheck} fontSize={30} color="#C3C3C3" />
              )}
            </label>
          </div>

          <br />

          <div className="formGroup">
            <input
              type="password"
              placeholder="Password"
              onFocus={() => this.setState({ password: true })}
              onBlur={() => this.setState({ password: false })}
            ></input>
            <label htmlFor="password" className="labelIcon">
              {this.state.password ? (
                <FontAwesomeIcon
                  icon={faUnlock}
                  fontSize={30}
                  color="#2c3e50"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUnlock}
                  fontSize={30}
                  color="#C3C3C3"
                />
              )}
            </label>
            <label htmlFor="username" className="RightIcon">
              {this.state.password ? (
                <FontAwesomeIcon icon={faEye} fontSize={30} color="green" />
              ) : (
                <FontAwesomeIcon icon={faEye} fontSize={30} color="#C3C3C3" />
              )}
            </label>
          </div>

          <br />
          <li>
            <h4>at least 8 characters</h4>
            <h4>at least one number or symbol</h4>
            <h4>at least one upper case</h4>
          </li>

          <br />

          <div className="formGroup">
            <input
              type="password"
              placeholder="Retype your password"
              onFocus={() => this.setState({ retype: true })}
              onBlur={() => this.setState({ retype: false })}
            ></input>
            <label htmlFor="password" className="labelIcon">
              {this.state.retype ? (
                <FontAwesomeIcon
                  icon={faUnlock}
                  fontSize={30}
                  color="#2c3e50"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUnlock}
                  fontSize={30}
                  color="#C3C3C3"
                />
              )}
            </label>
            <label htmlFor="username" className="RightIcon">
              {this.state.retype ? (
                <FontAwesomeIcon icon={faCheck} fontSize={30} color="green" />
              ) : (
                <FontAwesomeIcon icon={faCheck} fontSize={30} color="#C3C3C3" />
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
