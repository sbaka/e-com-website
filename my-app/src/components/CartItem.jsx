import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../css/CartItem.module.css";

/* NOT FINAL NEED SOME IMPROVMENT IN CSS BUT GOOD FOR A BEGINING */
/* 
    1- FIX ZOOM PROBLEMS 
    2- COUNTER PROBLEMS
    3- CSS ADJUSTMENT
*/

class CartItem extends Component {
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
        quantity: 1,
      });
    } else
      this.setState({
        quantity: this.state.quantity + -1,
      });
  };

  render() {
    return (
      <div className={styles.bagItemContainer}>
        <div className={styles.bagItem}>
          <div className={styles.leftSideBag}>
            <img
              className={styles.bagItemImg}
              src="https://cdn.shopify.com/s/files/1/0605/1338/6692/products/E22CHECL0029_BLF3_hd-mface_533x.jpg?v=1646930100"
            ></img>
            <p className={styles.bagItemProductTitle}> chemise</p>
          </div>
          <div>
            <p className={styles.productPrice}>2500DZD</p>
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
              value={this.state.quantity}
              onChange={() => ""} //to remobe the error li kanet tji
            />
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              cursor={"pointer"}
              fontSize={30}
              onClick={this.addquantity}
            />
          </div>
          <div>
            <p className={styles.bagItemTotal}>5000DZD</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faXmark}
              className={styles.bagItemDelete}
              fontSize={30}
              fontWeight={100}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
