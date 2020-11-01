import React, { Component } from "react";
import { Link } from "react-router-dom";
import './header.scss'
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">Till butiken</Link>
        <span className=" log logo-text">FruktHem.se</span>
      </div>
    );
  }
}
