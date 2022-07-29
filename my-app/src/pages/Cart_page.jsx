import React, { Component } from "react";
import Header from "../components/header";
import ListBag from "../components/ListBag";
import OrderInfo from "../components/OrderInfo";
import styles from "../css/Cart.module.css";

class Cart extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className={styles.mainContainer}>
          <ListBag />
          <div className={styles.order}>
            <OrderInfo />
          </div>
          {/* i use this for spacing */}
          <div className={styles.empty}></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
