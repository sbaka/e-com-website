import React, { Component } from "react";
import styles from "../css/Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

class Card extends Component<any, any>{ 
  state = {};
  render() {
    return (
      <React.Fragment>
        <a href="/ProductInfo" className="hlessLink">
          <div className={styles.card}>
            <div className={styles.productimage}>
              <span>
                <FontAwesomeIcon
                  className={styles.iconcard}
                  icon={faCirclePlus}
                  fontSize={25}
                />
              </span>
              <img className={styles.productpic} src={this.props.img} />
            </div>
            <div className={styles.productinfo}>
              <p className={styles.description}>{this.props.description}</p>
              <div className={styles.productprice}>
                <span className={styles.price}>{this.props.promotion} DZD</span>
                <span className={styles.realprice}>{this.props.price} DZD</span>
              </div>
            </div>
          </div>
        </a>
      </React.Fragment>
    );
  }
}

export default Card;
