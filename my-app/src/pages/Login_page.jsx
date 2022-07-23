import fbLogo from "../assets/facebook.png";
import googleLogo from "../assets/google.png";
import arrowPic from "../assets/arrow_signIn.png";
import "../css/Login_page.css";
import "https://kit.fontawesome.com/728d58002e.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faUnlock,
  faArrowLeft,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

//<script src="https://kit.fontawesome.com/728d58002e.js" crossorigin="anonymous"></script>

function Login() {
  return (
    <div className="parent">
      <div className="container">
        <button className="return">
          <FontAwesomeIcon icon={faArrowLeft} fontSize={30} />
        </button>
        <h2>Sign in</h2>
        <h4>Fill in the form bellow to continue</h4>

        <div className="formGroup">
          <input id="email" placeholder="E-mail"></input>
          <label htmlFor="email" className="labelIcon">
            <FontAwesomeIcon icon={faAt} fontSize={30} color="#C3C3C3" />
          </label>
        </div>

        <br />

        <div className="formGroup">
          <input type="password" placeholder="Password"></input>
          <label htmlFor="password" className="labelIcon">
            <FontAwesomeIcon icon={faUnlock} fontSize={30} color="#C3C3C3" />
          </label>
          <label className="eye">
            <FontAwesomeIcon icon={faEye} fontSize={30} color="#C3C3C3" />{" "}
            {/*TODO: when change icon => change htmlFor="password" to "text" */}
          </label>
        </div>

        <div className="signUp">
          <p>
            You don't have an account yet ? <a href="">Sign up</a>
          </p>
        </div>

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
      </div>
    </div>
  );
}
export default Login;
