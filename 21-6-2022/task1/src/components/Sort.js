import { Component } from "react";

const fruits = ["Banana" , "Orange"];
fruits.sort();
class Sort extends Component{
render(){
    return(
    <>
    <div>Sortting: </div>
    <ol>
        {fruits.map((fruit) => (
            <li key={fruits.indexOf(fruit)}>{fruit}</li>
        ))}
    </ol>
    </>
    
    );
}
}

export default Sort;