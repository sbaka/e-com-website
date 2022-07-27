import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
  faCircleXmark
} from "@fortawesome/free-solid-svg-icons";

import styles from "../css/Bag.module.css"


class Bag extends Component {
  state = {
    quantity: 1,
  }

  addquantity = () => {
    this.setState({
      quantity: this.state.quantity + 1
    });
  }
  subtractquantity = () => {
    if (this.state.quantity == 1) {
      this.setState({
        quantity: this.state.quantity = 1
      });
    }
    else this.setState({
      quantity: this.state.quantity + -1
    });
  }
  
  render() {
    return (
      <div className={styles.bagcontainer} >
        <div className={styles.bag}>
          <div className={styles.productcard}>
            <div className={styles.leftsidebag } >
            <img className={styles.productcardimg} src="https://cdn.shopify.com/s/files/1/0605/1338/6692/products/E22CHECL0029_BLF3_hd-mface_533x.jpg?v=1646930100">
            </img>
            <p className={styles.productcarddescription}> chemise</p>
            </div>
            <div >
              <p className={styles.productcardprice}>2500DZD</p>
            </div>
            <div className={styles.quantity}>
              <FontAwesomeIcon icon={faCircleArrowLeft} cursor={"pointer"} fontSize={30} onClick={this.subtractquantity} />
              <input type="number" className={styles.productcount} defaultValue="1" value={this.state.quantity} ></input>
              <FontAwesomeIcon icon={faCircleArrowRight} cursor={"pointer"} fontSize={30} onClick={this.addquantity} />
            </div>
            <div>
              <p class={styles.productcardrealprice}>5000DZD</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCircleXmark} className={styles.productdeletebutton} fontSize={30} />
            </div>


          </div>

        </div>
      </div>

    );
  }
}

export default Bag;