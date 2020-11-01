import React, { Component } from "react";
import "./product.scss"
import AddDeleteButton from '../button/AddDeleteButton'
export default class Product extends Component {
  render() {
    return (
      <div className="fruit">
        <img src={this.props.product.image} alt=""/>
        <div className="fruitName">{this.props.product.name}</div>
        <div className="price">
          {this.props.product.price} ,00 /{this.props.product.unit}
        </div>
        <AddDeleteButton product={this.props.product}/>
      </div>
    );
  }
}
