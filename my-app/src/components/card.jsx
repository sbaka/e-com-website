import React, { Component } from "react";
import Miki from "../assets/miki.jpg";
import "../css/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
class Card extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <a href="/ProductInfo">
          <div className="card">
            <div className="productimage">
              <span>
                <FontAwesomeIcon
                  className="iconcard"
                  icon={faCirclePlus}
                  fontSize={25}
                />
              </span>
              <img className="productpic" src={this.props.img} />
            </div>
            <div className="productinfo">
              <p className="description">{this.props.description}</p>
              <span className="price">{this.props.promotion} DZD</span>
              <span className="realprice">{this.props.price} DZD</span>
            </div>
          </div>
        </a>
      </React.Fragment>
    );
  }
}

export default Card;
