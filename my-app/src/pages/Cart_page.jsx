import React, { Component } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';


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
        {/* i use this for spacing at the top bch ma yjich lase9*/}
        <div className={styles.empty}></div>
        <div className={styles.mainContainer}>
          {/* this is a custom scrollbar that fades when not used
              for more info: https://www.npmjs.com/package/react-custom-scrollbars-2
          */}
          <div className={styles.items}>
            <h2 style={{"paddingBottom":"20px"}}>My Cart</h2>
            <Scrollbars 
            style={{ width: "100%", height: "87%"}}
            autoHide
            >
            <div style={{ width: "93%"}} >
              <ListBag />
            </div>
          </Scrollbars>
          </div>
          <div className={styles.vl}></div>
          <div className={styles.order}>
            <OrderInfo />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;

