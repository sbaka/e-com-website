import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../css/Bag.module.css";

/* NOT FINAL NEED SOME IMPROVMENT IN CSS BUT GOOD FOR A BEGINING */
/* 
1- FIX ZOOM PROBLEMS 
2- COUNTER PROBLEMS
3- CSS ADJUSTMENT
*/

class Bag extends Component {
  state = {
    quantity: 1,
  };

  addquantity = () => {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  };
  subtractquantity = () => {
    if (this.state.quantity == 1) {
      this.setState({
        quantity: (this.state.quantity = 1),
      });
    } else
      this.setState({
        quantity: this.state.quantity + -1,
      });
  };

  render() {
    return (
      <div className={styles.bagcontainer}>
        <div className={styles.bag}>
          <div className={styles.productcard}>
            <div className={styles.leftsidebag}>
              <img className={styles.productcardimg} src={this.props.img}></img>
              <p className={styles.productcarddescription}>
                {this.props.description}
              </p>
            </div>
            <div>
              <p className={styles.productcardprice}>
                {this.props.promotion} DZD
              </p>
            </div>
            <div className={styles.quantity}>
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                cursor={"pointer"}
                fontSize={30}
                onClick={this.subtractquantity}
              />
              <input
                type="number"
                className={styles.productcount}
                defaultValue="1"
                value={this.state.quantity}
              ></input>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                cursor={"pointer"}
                fontSize={30}
                onClick={this.addquantity}
              />
            </div>
            <div>
              <p className={styles.productcardrealprice}>
                {this.props.promotion * this.state.quantity}
              </p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className={styles.productdeletebutton}
                fontSize={30}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bag;
