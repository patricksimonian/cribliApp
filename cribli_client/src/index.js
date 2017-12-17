import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";

import App from "./App";
import AddItem from './components/AddItem';

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/add-item" component={AddItem} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
