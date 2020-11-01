import React, { Component } from "react";
import'./footer.scss'

export default class Footer extends Component {
  render() {
    return (
        <div className="footer">
          <h2>Kontakta oss</h2>
          <div className="contact">
            <div className="mail">
              <img src="@/assets/mail.svg" alt="" />
              <a href="mailto:mailus@fruktshop.com">mailus@fruktshop.com</a>
            </div>
            <div className="call">
              <img src="@/assets/call.svg" alt="" />
              <a href="##">072xxxxxxx</a>
            </div>
          </div>
          <span>Alla rättigheter reserverade @ FruktHem.se</span>
        </div>
    );
  }
}
