import "./css/style.css"
import Nav from './components/Nav';
import Pargraph from './components/Pargraph';
import Table from './components/Table';
import Sort from './components/Sort';
import Map from './components/Map';
import Filter from './components/Filter';
import React from "react";

class App extends React.Component{

  render(){
  return(
    <>
    <Nav/>
    <Pargraph/>
    <Table color="red"/>
    <Sort/>
    <Map/>
    <Filter/>
    </>
  );
  }
}



export default App;