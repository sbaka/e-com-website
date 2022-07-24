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
        <div className="card">
          <div className="productimage">
            <span>
            <FontAwesomeIcon className="iconcard" icon={faCirclePlus} fontSize={25} />
            </span>
            <img className="productpic" src={Miki} />
          </div>
          <div className="productinfo">
            <p className="description">LOREM IPSUIM  LOREM IPSUIM </p>
            <span className="price">2500 DZD</span
            ><span className="realprice">5000 DZD</span>
          </div>
        </div>
      </React.Fragment>


    );
  }
}

export default Card;
