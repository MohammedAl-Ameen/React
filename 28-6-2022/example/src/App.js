import React, { Component } from "react";

class App extends Component{

  // constructor(props){
  //   super(props)
  //   let name = props.name
  // }

  render(){
    return(
      <>
      <div>{this.props.name}</div>
      <div>{this.props.email}</div>
      </>

    )
  }
}


export default App;
