import React, { Component } from "react";
import Miki from "../assets/miki.jpg";
import "../css/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
class Card extends Component {
  state = {};
  render() {
    return (
      <figure className="card">
        {" "}
        {/*card component not finished*/}
        <div className="image">
          <img src={Miki} height="266px" />
          <FontAwesomeIcon className="slm" icon={faCirclePlus} fontSize={25} />
        </div>
        <p>9meja</p>
        <h5>2000dzd</h5>
      </figure>
    );
  }
}

export default Card;
