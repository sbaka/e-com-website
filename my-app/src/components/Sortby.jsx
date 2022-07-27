import { Component } from "react";
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";

import styles from "../css/Sortby.module.css"


class SortBy extends Component {
    state = {  } 
    render() { 
        return (
            <Combobox
            className={styles.combobox}
            placeholder="SortBy"
          />
        );
    }
}
 
export default SortBy;