import React, { Component } from "react";

import styles from "../css/Sortby.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
class SortBy extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <select name="pets" id="pet-select" className={styles.combobox}>
          {" "}
          {/*raha sans arrow*/}
          <option hidden value="">
            SortBy
          </option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </React.Fragment>
    );
  }
}

export default SortBy;
