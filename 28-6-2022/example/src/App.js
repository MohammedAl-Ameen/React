import React,{useState} from "react";
import Onchange from './onchange';
function App(props){
  // let counter = 0;

  const [counter , setCounter] = useState(0);

  const increment = () => {
    setCounter(counter+1);
  }

  console.log("rerender");

  return(
    <>
    <div>{props.name}</div>
    <div>{props.email}</div>
    <div>{counter}</div>
    <button onClick={increment}>Click me</button>
    <button onClick={() => setCounter(2)}>Click</button>
    <Onchange counter={counter}/>
    </>
  )
}
export default App;
  // constructor(props){
  //   super(props)
  //   let name = props.name
  // }


