import React,{useState} from "react";


function Example(props){
    const [Mohammed , setEmail] = useState({
        text: "",
        counter: ""
    })

if(Mohammed.counter != props.counter){
    setEmail(({
        ...Mohammed,
        counter: props.counter
    }))
}
    const changes = (e) => {
    if(e.target.value == ""){
        setEmail((({
            text: "",
            counter: ""
        })))
    }else{
        setEmail(({
            text: e.target.value,
            counter: props.counter
        }))
    }
    }
    return(
        <>
        {/* <div>Mohammed</div> */}
        <input onChange={changes}/>
        <div>{Mohammed.text}{Mohammed.counter}</div>
        </>
    )
}


export default Example; 