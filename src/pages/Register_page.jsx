/*
    TODO: -  Error display kayen 3:
                - ta3 fill in the form ki ydir submit l form khawya
                - ki ykoun server response 409 (conflict)
                - f regex lokan ykoun kayen info on hover on what it should should contain 
            
*/
import React, { Component } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
import ReactTooltip from "react-tooltip";

//local imports
import { User } from "../models/models.ts";
import fbLogo from "../assets/facebook.png";
import googleLogo from "../assets/google.png";
import arrowPic from "../assets/arrow_signIn.png";
import styles from "../css/pages/Register.module.css";
import loginStyles from "../css/pages/Login.module.css";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
//reg expression
const numSymbolReg = /([0-9]|[#?!@$%^/&*-.<> ])/;
const uppercaseReg = /([A-Z])/;
/*username is 5-18 characters long,
  no _ or . at the beginning,
  no __ or _. or ._ or .. inside
  allowed characters
  no _ or . at the end*/
const userNameReg =
  /^(?=.{5,18}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
const mailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

function ReturnButton() {
  const navigate = useNavigate();
  return (
    <button className={loginStyles.return} onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faArrowLeft} fontSize={30} />
    </button>
  );
}

class Register extends Component {
  state = {
    //user
    userValue: "",
    userValueBool: false, //to show the icon check
    userAccepted: false,
    //emai
    email: false,
    emailValue: "",
    emailValueBool: false, //to show the icon check
    emailAccepted: false,
    //password
    password: false,
    passwordString: "",
    passwordConditions: false,
    passwordAccepted: false,
    lengthCondition: false, //for password check
    numSymbolCondition: false, //for password check
    uppercaseCondition: false, //for password check
    eye: false, //to show the eye for hide/show pwd
    //password confirmation
    retype: false,
    retypeValue: "",
    retypeValueBool: false,
    //other
    divDisabled: false, //to disable the div on load
    errors: [], //used on every onBlur on every input to display errors or to not
    /*should be like this : 
      errors : {
        "all" : "msg", //errors from the server
        "username": "msg",
        "email": "msg",
        "password": "msg",
        "confirmPwd" : "msg"
      }
    */
  };

  ChangePasswordToText = () => {
    /*switch beetween icons + password or text type*/
    this.setState({
      eye: !this.state.eye,
    });
  };

  passwordChange = (event) => {
    //this function is used to check the criteria for the password to be accepted or na
    this.setState({ passwordString: event.target.value });
    //condition to show password's creteria
    if (event.target.value.length > 0) {
      this.setState({ passwordConditions: true });
      //if the password isn't empty check for these
      if (event.target.value.length >= 8) {
        //the 8 caracters condition
        this.setState({ lengthCondition: true });
      } else this.setState({ lengthCondition: false });

      if (
        numSymbolReg.test(event.target.value) &&
        !event.target.value.includes('"') &&
        !event.target.value.includes("'")
      ) {
        //check if the password has atleast one number/symbol in it
        this.setState({ numSymbolCondition: true });
        //console.log(event.target.value, numSymbolReg.test(event.target.value));
      } else this.setState({ numSymbolCondition: false });

      if (uppercaseReg.test(event.target.value))
        //check if the password has atleast one uppercase
        this.setState({ uppercaseCondition: true });
      else this.setState({ uppercaseCondition: false });
    } else {
      this.setState({ passwordConditions: false });
    }

    //adding a conjucture to join all the booleans
    this.setState({
      passwordAccepted:
        this.state.lengthCondition &&
        this.state.numSymbolCondition &&
        this.state.uppercaseCondition,
    });
  };

  retypeChange = (event) => {
    this.setState({
      retypeValue: event.target.value,
    });
    //console.log(this.state.passwordString);
    if (event.target.value === this.state.passwordString)
      this.setState({ retypeValueBool: true });
    else this.setState({ retypeValueBool: false });
  };

  userChange = (event) => {
    //this function is for showing the right check icon on input
    this.setState({ userValue: event.target.value }); //set username value in the state

    if (event.target.value === 0)
      this.setState({
        userValueBool: false,
      });
    //set {userValueBool} to false or true to decide if we show the right icon or not
    else this.setState({ userValueBool: true });

    if (userNameReg.test(event.target.value)) {
      this.setState({ userAccepted: true });
    }
    //check using {userAccepted} if the username matches with the regex
    //if yes it shows the green color else shows the gray one
    else this.setState({ userAccepted: false });
  };

  mailChange = (event) => {
    //same as userChange
    this.setState({ emailValue: event.target.value });
    if (event.target.value === 0) this.setState({ emailValueBool: false });
    else this.setState({ emailValueBool: true });

    if (mailReg.test(event.target.value))
      //check if the username matches with the regex  (=> emailAccepted = true)
      //if yes it shows the green color
      this.setState({ emailAccepted: true });
    //else it shows the gray one
    else this.setState({ emailAccepted: false });
  };

  submitSignUp = (event) => {
    //to handle form submition;
    let pwdAcceted = this.state.passwordAccepted;
    let userNAeccepted = this.state.userAccepted;
    let isEmailAcceted = this.state.emailAccepted;
    let samePwd = this.state.retypeValueBool;
    if (!this.isFormEmpty()) {
      if (pwdAcceted && userNAeccepted && isEmailAcceted && samePwd) {
        //set the the div to disabled to prevent more inputs
        this.setState({
          divDisabled: true,
        });
        //console.log("proceed to login");
        const currentUser: User = {
          user: this.state.userValue,
          email: this.state.emailValue,
          password: this.state.passwordString,
        };
        axios({
          method: "post",
          url: "https://sbaka-e-com-website.deno.dev/adduser",
          data: currentUser,
        })
          .then((response) => {
            this.setState({
              divDisabled: false,
            });
            console.log(response);
            this.clearInputs();
          })
          .catch((err) => {
            if ((err.status = 409)) {
              // console.log("status = 409");
              this.setState({
                errors: { All: err.response.data.msg },
                divDisabled: false,
              });
            } else {
              this.setState({
                errors: { All: "Unexpected server error code: " + err.status },
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
        errors: { All: "fill in all the inputs to proceed" },
      });

      // console.log(pwdAcceted, userNAeccepted, isEmailAcceted, samePwd);
    }
  };
  isFormEmpty = () => {
    //if one of these is true then yes the form is empty
    return (
      this.state.userValue.length === 0 ||
      this.state.emailValue.length === 0 ||
      this.state.passwordString.length === 0 ||
      this.state.retypeValue.length === 0
    );
  };
  //clearing inputs
  clearInputs = () => {
    this.setState({
      //user
      user: false,
      userValue: "",
      userValueBool: false, //to show the icon check
      userAccepted: false,
      //emai
      email: false,
      emailValue: "",
      emailValueBool: false, //to show the icon check
      emailAccepted: false,
      //password
      password: false,
      passwordString: "",
      passwordConditions: false,
      passwordAccepted: false,
      lengthCondition: false, //for password check
      numSymbolCondition: false, //for password check
      uppercaseCondition: false, //for password check
      eye: false, //to show the eye for hide/show pwd
      //password confirmation
      retype: false,
      retypeValue: "",
      retypeValueBool: false, //should be retypeAccepted
      //other
      divDisabled: false, //to disable the div on load
      errors: [],
    });
  };
  isEmpty = (object) => {
    for (const property in object) {
      return false;
    }
    return true;
  };
  render() {
    return (
      <div className={styles.parent}>
        <div className={styles.container}>
          <div
            className={styles.formContainer}
            disabled={this.state.divDisabled}>
            <ReturnButton />
            <h2>Sign up</h2>
            <h4>Fill in the form bellow to continue</h4>
            <br />
            <div className={loginStyles.formGroup}>
              <input
                id="username"
                placeholder="Username"
                autoComplete="off"
                onFocus={() =>
                  this.setState({ user: true })
                } /*user icon highlight added*/
                onBlur={() => {
                  this.setState({ user: false });
                  if (!this.state.userAccepted) {
                    this.setState({
                      errors: { username: "Enter a valid username format" },
                    });
                  } else {
                    this.setState({
                      errors: { username: null },
                    });
                  }
                }} /*user icon highlight removed */
                value={this.state.userValue}
                onChange={this.userChange}
                data-tip="can only be 5-18 alphanumerics long and only supports '-' or '_' in between"
              />
              <label htmlFor="username" className={styles.labelIcon}>
                <FontAwesomeIcon
                  icon={faUser}
                  fontSize={30}
                  color={this.state.user ? "#2c3e50" : "#C3C3C3"}
                />
              </label>
              <label htmlFor="username" className={styles.RightIcon}>
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
              <ErrorMessage message={this.state.errors.username} />
            </div>

            <br />

            <div className={loginStyles.formGroup}>
              <input
                id="email"
                placeholder="E-mail"
                autoComplete="off"
                onFocus={() => this.setState({ email: true })}
                onBlur={() => {
                  this.setState({ email: false });
                  if (!this.state.emailAccepted) {
                    this.setState({
                      errors: { email: "Enter a valid email format" },
                    });
                  } else {
                    this.setState({
                      errors: { email: null },
                    });
                  }
                }}
                value={this.state.emailValue}
                onChange={this.mailChange}
              />
              <label htmlFor="email" className={styles.labelIcon}>
                <FontAwesomeIcon
                  icon={faAt}
                  fontSize={30}
                  color={this.state.email ? "#2c3e50" : "#C3C3C3"}
                />
              </label>
              <label htmlFor="email" className={styles.RightIcon}>
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
              <ErrorMessage message={this.state.errors.email} />
            </div>

            <br />

            <div className={loginStyles.formGroup}>
              <input
                type={this.state.eye ? "text" : "password"}
                placeholder="Password"
                onFocus={() => this.setState({ password: true })}
                onBlur={(e) => {
                  this.setState({ password: false });
                  this.passwordChange(e);
                  if (!this.state.passwordAccepted) {
                    //FIXME: fix this bug where the err msg doesnt disappear right away take +1 step
                    this.setState({
                      errors: { password: "Enter a valid password" },
                    });
                  } else {
                    this.setState({
                      errors: { password: null },
                    });
                  }
                }}
                onChange={this.passwordChange}
                value={this.state.passwordString}
                data-tip="Only accepts [#?!@$%^/&*-.<> ] as symbols"
              />
              <label htmlFor="password" className={styles.labelIcon}>
                <FontAwesomeIcon
                  icon={faUnlock}
                  fontSize={30}
                  color={this.state.password ? "#2c3e50" : "#C3C3C3"}
                />
              </label>
              <label htmlFor="password" className={loginStyles.eye}>
                <FontAwesomeIcon
                  icon={this.state.eye ? faEye : faEyeSlash}
                  fontSize={30}
                  color={this.state.eye ? "#2c3e50" : "#C3C3C3"}
                  onClick={this.ChangePasswordToText}
                />
              </label>
              <ErrorMessage message={this.state.errors.password} />
            </div>
            {/* this section is for showing the paasword conditions to be fulfilled or not */}
            {this.state.passwordConditions ? (
              <div>
                <h4
                  style={{
                    color: this.state.lengthCondition ? "green" : "red",
                  }}>
                  <FontAwesomeIcon
                    icon={this.state.lengthCondition ? faCheck : faXmark}
                  />
                  &nbsp;&nbsp; at least 8 characters
                </h4>
                <h4
                  style={{
                    color: this.state.numSymbolCondition ? "green" : "red",
                  }}>
                  <FontAwesomeIcon
                    icon={this.state.numSymbolCondition ? faCheck : faXmark}
                  />
                  &nbsp;&nbsp; at least one number or symbol
                </h4>
                <h4
                  style={{
                    color: this.state.uppercaseCondition ? "green" : "red",
                  }}>
                  <FontAwesomeIcon
                    icon={this.state.uppercaseCondition ? faCheck : faXmark}
                  />
                  &nbsp;&nbsp; at least one upper case
                </h4>
              </div>
            ) : (
              ""
            )}
            <br />

            <div className={loginStyles.formGroup}>
              <input
                type="password"
                placeholder="Retype your password"
                onFocus={() => this.setState({ retype: true })}
                onBlur={() => {
                  this.setState({ retype: false });
                  if (!this.state.retypeValueBool) {
                    this.setState({
                      errors: { retype: "passwords don't match" },
                    });
                  } else {
                    this.setState({
                      errors: { retype: null },
                    });
                  }
                }}
                onChange={this.retypeChange}
                value={this.state.retypeValue}
                data-tip="Passwords must match"
              />
              <label htmlFor="password" className={styles.labelIcon}>
                <FontAwesomeIcon
                  icon={faUnlock}
                  fontSize={30}
                  color={this.state.retype ? "#2c3e50" : "#C3C3C3"}
                />
              </label>
              <label htmlFor="password" className={styles.RightIcon}>
                {this.state.retypeValueBool ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    fontSize={30}
                    color={this.state.retypeValueBool ? "green" : "#C3C3C3"}
                    data-tip="if it's green then they're matching"
                  />
                ) : (
                  ""
                )}
              </label>
              <ErrorMessage message={this.state.errors.retype} />
            </div>
            <ErrorMessage message={this.state.errors.All} />
          </div>
          <div className={styles.signUp}>
            <p>
              Already a member ? <a href="/Login">Sign in</a>
            </p>
          </div>

          <div className={styles.bottomDiv}>
            <button
              type="submit"
              className={styles.submitBtn}
              onClick={(e) => this.submitSignUp(e)}>
              <p>Sign up </p>
              <img id="arrow" src={arrowPic} alt="" />
            </button>
            Or
            <div>
              <img src={fbLogo} alt="fb" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={googleLogo} alt="google" />
            </div>
            <div className={styles.loading}>
              {this.divDisabled ? <Loader /> : ""}
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
        {/* to handle the tooltip shown the params are:
              -wait 300ms to show the toltip to avoid accidental shows
              -remove it after 3s
        */}
        <ReactTooltip
          delayShow={300}
          afterShow={(e) => setTimeout(ReactTooltip.hide, 3000)}
        />
      </div>
    );
  }
}
export default Register;
