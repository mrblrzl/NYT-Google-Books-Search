import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Form from "./components/Form";
import Results from "./components/Results";

class App extends Component {
  state = {
    books: []
  }
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron/>
        <Form/>
        <Results />
      </div>
    );
  }
}

export default App;

