import React from "react";
import dahabiaLogo from "../assets/eddahabia.svg";
import cibLogo from "../assets/CIB.svg";
import emptyLogo from "../assets/Rectangle.svg";
import styles from "../css/Cart.module.css";

//crating a custom component inside here cuz i'll just need it here
function CardComponent(props) {
  return (
    <div className={styles.cardComponent}>
      <img src={props.src} alt={props.title} />
      <div>
        <h4>{props.title}</h4>
        <p id="paymentDescription">{props.paymentDes}</p>
      </div>
    </div>
  );
}
class OrderInfo extends React.Component {
  render() {
    return (
      <div className={styles.orderContainer}>
        <h2>Order</h2>
        <div style={{ height: "10px" }}></div>
        <div className={styles.Group}>
          <h5>Subtotal</h5>
          <p>4500 DZD</p>
        </div>
        <div className={styles.Group}>
          <h5>Service fee</h5>
          <p>250 DZD</p>
        </div>
        <div>
          <a href="#">Got a discount ?</a>
        </div>
        <CardComponent
          title="Eddahabia Card"
          paymentDes="Pay with Eddahabia Card"
          src={dahabiaLogo}
        />
        <CardComponent
          title="CIB Card"
          paymentDes="Pay with CIB Card"
          src={cibLogo}
        />
        <CardComponent
          title="Pay at reception"
          paymentDes="Pay when your product is delivered to you"
          src={emptyLogo}
        />
        <button>Checkout</button>
        <hr />
        <div className={styles.bottomPolicy}>
          <p>
            By clicking "Checkout" I acknowledge I have read and accepted the
            Terms and Conditions including the Privacy Notice and Cookies. I
            also have read and accepted Code Activated Shop's T/C & Refund
            Policy
          </p>
        </div>
      </div>
    );
  }
}

// class CardComponent extends Component {
//     render() {
//         return (

//          );
//     }
// }

export default OrderInfo;
