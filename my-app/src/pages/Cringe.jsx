import React, { Component } from "react";

class Cringe extends Component {
  state = {
    value: this.props.value,
    price: 0,
  };

  render() {
    return (
      <div className="container">
        <h1>{this.props.name}</h1>
        <div className="whd">
          <div className="btns">
            <button
              onClick={() => {
                this.incr(this.state.value, this.props.price);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                this.Decr(this.state.value, this.props.price);
              }}
            >
              -
            </button>

            <h1>{this.state.value}</h1>
          </div>
          <h2>{this.state.price}</h2>
        </div>
      </div>
    );
  }
  incr = (val, prix) => {
    this.setState({ value: val + 1, price: prix * (val + 1) });
    this.props.onUpdate(this.props.id, this.state.price + this.props.price);
  };
  Decr = (val, prix) => {
    val > 0
      ? this.setState({ value: val - 1, price: prix * (val - 1) })
      : console.log(" ");
  };
}

export default Cringe;
