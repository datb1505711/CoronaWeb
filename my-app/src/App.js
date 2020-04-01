import React, { Component } from "react";
import "./App.css";
// class MyAppComponent extends Component {
//   render() {
//     return this.props.render();
//   }
// }

class App extends Component {
  render() {
  
    
    return tick();
  }
}

function tick() {

  const element = (
    <div>
      <h1> Hello, world!</h1>
      <h2> it is {new Date().getMilliseconds()}</h2>
    </div> 
  )
  return element;
}

export default App;
