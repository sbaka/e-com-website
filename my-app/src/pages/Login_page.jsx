import axios from "axios";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faAt,
  faUnlock,
  faArrowLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
//local imports
import fbLogo from "../assets/facebook.png";
import googleLogo from "../assets/google.png";
import arrowPic from "../assets/arrow_signIn.png";
import Loader from "../components/Loader";
import styles from "../css/pages/Login.module.css"; //css
import ErrorMessage from "../components/ErrorMessage";

function ReturnButton() {
  const navigate = useNavigate();
  return (
    <button className={styles.return} onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faArrowLeft} fontSize={30} />
    </button>
  );
}

class Login extends Component {
  state = {
    eye: false /*to handle the changes on click of the icon*/,
    email: false, //this is for styling
    emailAccepted: false, //this is for handeling the regex
    emailValue: "", // this is for the actual value of the mail
    password: false,
    passwordAccepted: false,
    passwordValue: "",
    user: [],
    divDisabled: false,
    errors: [],
  };

  emailValueHandler = (event) => {
    //email reg to check if the email is conform to the standards
    const mailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    this.setState({ emailValue: event.target.value });

    if (mailReg.test(event.target.value))
      //check if the username matches with the regex  (=> emailAccepted = true)
      //if yes it shows the green color
      this.setState({ emailAccepted: true });
    //else it shows the gray one
    else this.setState({ emailAccepted: false });
    // console.log(this.state.emailAccepted);
  };

  passwordValueHandler = (event) => {
    this.setState({ passwordValue: event.target.value });
    // console.log("state: " + this.state.passwordValue);
    if (event.target.value.length > 7) {
      if (event.target.value.includes("'") || event.target.value.includes('"'))
        this.setState({ passwordAccepted: false });
      else this.setState({ passwordAccepted: true });
    }
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
    //TODO: add password encryption and decreption before sending a get request
    /*
      so what this does is sets the {divDisabled} state to true to display the loading
      go make a get request with the url /user/{email}/{password}
      and then sets {divDisabled} back to false 
      TODO: navigate to the next page right after.
    */
    const client = axios.create({
      baseURL: "http://sbaka-e-com-website.deno.dev",
    });
    const email = this.state.emailValue;
    const pwd = this.state.passwordValue;
    if (email !== "" && pwd !== "") {
      if (this.state.emailAccepted && this.state.passwordAccepted) {
        this.setState({
          divDisabled: true,
        });

        client
          .get("/users/" + email + "/" + pwd)
          .then((response) => {
            // console.log(response);
            if (response.data.success) {
              console.log(response.data.body[0]);
              this.clearInputs();
            }
            this.setState({
              divDisabled: false,
            });
          })
          .catch((err) => {
            let errMsg = "";
            if (err.response.status === 404) {
              errMsg = err.response.data.msg;
              //assing the message to the errors array
              this.setState({
                errors: { All: errMsg },
                divDisabled: false,
              });
            } else {
              errMsg = "Unnexpected error has accured";
              //assing the message to the errors array
              this.setState({
                errors: { All: errMsg },
                divDisabled: false,
              });
            }
          });
      } else {
        this.setState({
          errors: { All: "Make sure you got all the format correct" },
        });
      }
    } else {
      this.setState({
        errors: { All: "Fill in all the inputs to proceed" },
      });
    }
  };
  // submit = () => {
  // }
  clearInputs = () => {
    this.setState({
      eye: false,
      email: false,
      emailValue: "",
      password: false,
      passwordValue: "",
      user: [],
      divDisabled: false,
      errors: [],
    });
  };
  render() {
    return (
      <div className={styles.parent}>
        <div className={styles.container_login}>
          <div
            className={styles.formContainer}
            disabled={this.state.divDisabled}>
            <ReturnButton />
            <h2>Sign in</h2>
            <h4>Fill in the form bellow to continue</h4>
            <br />
            <div className={styles.formGroup}>
              {/*to change color onfocus-onblur */}
              <input
                id="email"
                placeholder="E-mail"
                value={this.state.emailValue}
                onFocus={() => this.setState({ email: true })}
                onBlur={(e) => {
                  this.setState({ email: false });
                  this.emailValueHandler(e);
                }}
                onChange={this.emailValueHandler}
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
                value={this.state.passwordValue}
                onFocus={() => this.setState({ password: true })}
                onBlur={(e) => {
                  this.setState({ password: false });
                  this.passwordValueHandler(e);
                }}
                onChange={this.passwordValueHandler}
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
            <ErrorMessage message={this.state.errors.All} />
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
              onClick={this.fetchUser}>
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
          <div
            className={styles.loading}
            style={
              ({ opacity: this.state.divDisabled ? 1 : 0 },
              { zIndex: this.state.divDisabled ? "9" : "-1" })
            }>
            {this.state.divDisabled ? <Loader /> : ""}
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
