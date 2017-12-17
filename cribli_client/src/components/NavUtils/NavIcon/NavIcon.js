// ItemService.js
import React, { Component } from "react";
import "./NavIcon.css";
class NavIcon extends Component {
 render() {
  return (
    <div className="nav-icon-wrap">
      <a className="nav-icon-action" href="">
        <i className={this.props.iconClass} aria-hidden="true" />
        <span className="action-text">{this.props.iconText}</span>
      </a>
      <div>this is the logsin window</div>
    </div>
    );
 }
}

export default NavIcon;
