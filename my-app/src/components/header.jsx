import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.png";
import styles from "../css/Header.module.css";
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
      //  React Fragments allow you to wrap or group multiple elements without adding an extra node to the DOM.
      //This can be useful when rendering multiple child elements/components in a single parent component.
      <React.Fragment>
        <header>
          <FontAwesomeIcon
            className={styles.bars}
            icon={faBars}
            fontSize={25}
          />
          <div className={styles.Logo}>
            <img id="Logo" src={Logo} height="70px" alt="" />
          </div>
          <div className={styles.headerRight}>
            <FontAwesomeIcon
              className={styles.iconheader}
              icon={faMagnifyingGlass}
              fontSize={25}
            />
            <a href="/Register"><FontAwesomeIcon
              className={styles.iconheader}
              icon={faBagShopping}
              fontSize={25}
            /></a>

            <div className={styles.signin_up}>
              <h4 className={styles.links}>
                <a href="/Login">sign in</a>
              </h4>
              <FontAwesomeIcon
                className={styles.links}
                icon={faGripLinesVertical}
                fontSize={25}
              />
              <h4 className={styles.links}>
                <a href="/Register">sign up</a>
              </h4>
            </div>
          </div>
        </header>
        <div className={styles.underHeader}>
          {/*categories*/}
          <ul className={styles.ul}>
            <li className={styles.li}>MAN</li>
            <li className={styles.li}>WOMAN</li>
            <li className={styles.li}>KIDS</li>
            <li className={styles.li}>WATCHES</li>
            <li className={styles.li}>BAGS</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default Header;
