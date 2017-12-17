import React, { Component } from "react";
import Nav from './components/Nav/Nav';
import "./App.css";
import "./components/Utilities/styles/buttons.css"
import "normalize.css";
import _ from 'lodash';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navMenu: {
        menus: [["login", "close"]]
      }
    }
    this.changeNavMenuState = this.changeNavMenuState.bind(this);
  }

  changeNavMenuState(menu, currentState) {
    console.log("called", menu, currentState)
    //find state
    let oldMenus = this.state.navMenu.menus
    let i = _.findIndex(oldMenus, (m) => {
      return m[0] === menu;
    });
    let newMenus = _.map(oldMenus, (m2, ind) => {
      if(ind === i) return [menu, currentState];
      return m2
    });
    this.setState({navMenu: {menus: newMenus}});
  }

  render() {
    return (
      <div className="App">
        <Nav menus={this.state.navMenu.menus} changeMenuClass={this.changeNavMenuState}/>
        <header className="App-header">
          <h1 className="App-title">Welcome 2o React</h1>
        </header>

      </div>
    );
  }
}

export default App;
