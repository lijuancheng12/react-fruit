import React, { Component } from "react";
import minus from '../../assets/minus.svg';
import add from '../../assets/add.svg'
import './addDelete.scss'

export default class AddDeleteButton extends Component {
  render() {
    return (
      <div className="clickB">
        <img
          src={minus}
          alt="minus"
          onClick={this.down}
          className="minus"
        />
        <h6 className="count">{this.props.product.count}st</h6>

        <img
          src={add}
          alt="add"
          onClick={this.increment}
          className="add"
        />
      </div>
    );
  }
}
