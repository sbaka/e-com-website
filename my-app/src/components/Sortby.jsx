import React, { Component } from "react";
import Select from 'react-select'
import styles from "../css/Sortby.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/* Dummy dat just to see the combobox*/
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class SortBy extends Component {
  
  state = {};
  render() {
    return (
      <React.Fragment>
     <Select options={options} placeholder="Sortby"/>
      </React.Fragment>
    );
  }
}

export default SortBy;
