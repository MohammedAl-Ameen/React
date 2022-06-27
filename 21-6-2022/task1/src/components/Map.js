import React, { Component } from "react";

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];

function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
}

const names = persons.map(getFullName);

class Map extends React.Component{
    render(){
        return(
            <>
                <div>Map</div>
                <ul>
                    {names.map((name) => 
                        <li>{name}</li>
                    )}
                </ul>
            </>
        )
    }
}


export default Map;