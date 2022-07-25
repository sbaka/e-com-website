import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.png";
import "../css/Header.css";
import {
  faBars,
  faMagnifyingGlass,
  faBagShopping,
  faGripLinesVertical,
} from "@fortawesome/free-solid-svg-icons";
class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header>
          <FontAwesomeIcon className="icon" icon={faBars} fontSize={25} />
          <div className="Logo">
            <img id="Logo" src={Logo} height="70px" alt="" />
          </div>
          <div className="headerRight">
            <FontAwesomeIcon
              className="iconheader"
              icon={faMagnifyingGlass}
              fontSize={25}
            />
            <FontAwesomeIcon
              className="iconheader"
              icon={faBagShopping}
              fontSize={25}
            />
            <div className="signin_up">
              <h4 className="links">
                <a href="/Login">sign in</a>
              </h4>
              <FontAwesomeIcon
                className="links"
                icon={faGripLinesVertical}
                fontSize={25}
              />
              <h4 className="links">
                <a href="/Register">sign up</a>
              </h4>
            </div>
          </div>
        </header>
        <div className="underHeader">
          <ul>
            <li>MAN</li>
            <li>WOMAN</li>
            <li>KIDS</li>
            <li>WATCHES</li>
            <li>BAGS</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default Header;
