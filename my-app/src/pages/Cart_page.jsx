import React, { Component } from "react";
import CartItem from "../components/CartItem";
import Header from "../components/header";
import OrderInfo from "../components/OrderInfo";
import styles from "../css/Cart.module.css"
class Cart extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className={styles.mainContainer}>
                    <CartItem/>
                    <div className={styles.order}>
                        <OrderInfo/>
                    </div>
                    {/* i use this for spacing */}
                    <div className={styles.empty}>
                        
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Cart;