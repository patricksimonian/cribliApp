// ItemService.js
import React, { Component } from "react";
import "./Nav.css"
// import NavIcon from "../NavUtils/NavIcon/NavIcon";
import Login from "../Login/Login.js";
class Nav extends Component {
 constructor(props) {
  super(props);

 }

 _handleHover(menu, currentState) {
  let className = currentState === 'close' ? 'open' : 'close';
  console.log(menu, currentState)
  this.props.changeMenuClass(menu, className);
 }
 render() {
  return (
      <nav id="sidebar-main">
        <div className="sidebar-upper sidebar-section">
          <div className={"nav-icon-wrap menu-" + this.props.menus[0][1]}>
            <button className="nav-icon-action" onClick={(e) => {
              e.preventDefault();
              this._handleHover("login", this.props.menus[0][1])
            }}>
              <i className="fa fa-sign-in" aria-hidden="true" />
              <span className="action-text">sign-in</span>
            </button>
            <div className="nav-icon-menu">
              <Login />
            </div>
          </div>
        </div>
        <div className="sidebar-lower sidebar-section">

        </div>
      </nav>
    );
 }
}

export default Nav;
