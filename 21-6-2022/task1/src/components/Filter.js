import React, { Component } from "react";
const ages = [32, 33, 16, 40];

const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}

class Filter extends React.Component{
    render(){
        return(
            <>
                <div>Filter</div>
                <ul>
                    {result.map((name) => 
                        <li>{name}</li>
                    )}
                </ul>
            </>
        )
    }
}


export default Filter;