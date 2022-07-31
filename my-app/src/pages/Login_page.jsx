import React, { Component } from "react";
import fbLogo from "../assets/facebook.png";
import googleLogo from "../assets/google.png";
import arrowPic from "../assets/arrow_signIn.png";
import styles from "../css/Login.module.css"; //css
import axios from "axios";
import "https://kit.fontawesome.com/728d58002e.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faUnlock,
  faArrowLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function ReturnButton() {
  const navigate = useNavigate();
  return (
    <button className={styles.return} onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faArrowLeft} fontSize={30} />
    </button>
  );
}
const client = axios.create({
  baseURL: "http://sbaka-e-com-website.deno.dev",
});
class Login extends Component {
  state = {
    eye: false /*to handle the changes on click of the icon*/,
    email: false,
    emailValue: "",
    password: false,
    passwordValue: "",
    user: [],
  };
  emailValueHandler = (event) => {
    this.setState({ emailValue: event });
    // console.log("state: " + this.state.emailValue);
  };
  passwordValueHandler = (event) => {
    this.setState({ passwordValue: event });
    // console.log("state: " + this.state.passwordValue);
  };
  componentDidMount() {}
  ChangePasswordToText = () => {
    /*switch beetween icons + password or text type*/
    this.setState({ eye: !this.state.eye });
  };
  setUser = (data) => {
    this.setState({ user: data });
  };

  fetchUser = () => {
    const email = this.state.emailValue;
    const pwd = this.state.passwordValue;
    // console.log("hello " + email + " " + pwd);
    if (email != null && pwd != null) {
      client
        .get("/users/" + email + "/" + pwd)
        .then((response) => {
          // console.log(response);
          if (response.data.success) {
            console.log(response.data.body[0]);
          }
        })
        .catch((err) => {
          console.log("err");
        });
    }
  };

  render() {
    return (
      <div className={styles.parent}>
        <div className={styles.container_login}>
          <div className={styles.formContainer}>
            <ReturnButton />
            <h2>Sign in</h2>
            <h4>Fill in the form bellow to continue</h4>
            <br />
            <div className={styles.formGroup}>
              {/*to change color onfocus-onblur */}
              <input
                id="email"
                placeholder="E-mail"
                onFocus={() => this.setState({ email: true })}
                onBlur={() => this.setState({ email: false })}
                onChange={(e) => this.emailValueHandler(e.target.value)}
              />
              <label htmlFor="email" className={styles.labelIcon}>
                <FontAwesomeIcon
                  icon={faAt}
                  fontSize={30}
                  color={this.state.email ? "#2c3e50" : "#C3C3C3"}
                />
              </label>
            </div>

            <br />

            <div className={styles.formGroup}>
              <input
                type={this.state.eye ? "text" : "password"}
                placeholder="Password"
                onFocus={() => this.setState({ password: true })}
                onBlur={() => this.setState({ password: false })}
                onChange={(e) => this.passwordValueHandler(e.target.value)}
              />
              <label htmlFor="password" className={styles.labelIcon}>
                <FontAwesomeIcon
                  icon={faUnlock}
                  fontSize={30}
                  color={this.state.password ? "#2c3e50" : "#C3C3C3"}
                />
              </label>
              <label className={styles.eye}>
                <FontAwesomeIcon
                  icon={this.state.eye ? faEye : faEyeSlash}
                  fontSize={30}
                  color={this.state.eye ? "#2c3e50" : "#C3C3C3"}
                  className={styles.eyeicon}
                  onClick={this.ChangePasswordToText}
                />
              </label>
            </div>
          </div>

          <div className={styles.signUp}>
            <p>
              You don't have an account yet ? <a href="/Register">Sign up</a>
            </p>
          </div>

          <div className={styles.bottomDiv}>
            <button
              type="submit"
              className={styles.submitBtn}
              onClick={this.fetchUser}
            >
              <p>Sign in </p>
              <img id="arrow" src={arrowPic} alt="" />
            </button>
            Or
            <div>
              <img src={fbLogo} alt="fb" />
              &nbsp;&nbsp;
              <img src={googleLogo} alt="google" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
