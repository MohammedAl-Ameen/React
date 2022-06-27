import { Component } from 'react';
import {useState} from "react";

class App extends Component{

  constructor(){
    super();
    this.state = {
      items: [],
      isLoaded: false,
    }
  }


  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res=>res.json())
  //     .then(json=>{
  //       this.setState({
  //         isLoaded: true,
  //         items: json,
  //       })
  //       console.log(json);
  //     })


  // }


  async componentDidMount(){
    let response = await fetch("http://127.0.0.1/react/24-6-2022/provider/index.php");
    let data = await response.json();
    this.setState({
      items: data,
      isLoaded: true,
    })
  }


  render(){
    const [query , setQuery] = useState([]);
    var {isLoaded , items} = this.state;
    if(!isLoaded){
      return <div>Loading....</div>
    }else{
      return(
        <>
                  <div className="form-group mb-2">
                      <label for="staticEmail2" className="sr-only">Email</label>
                          <input type="text" onChange={(e) => setQuery(e.target.value)}/>
                      
                  </div>
      <div className="form-group mx-sm-3 mb-2">
      <label for="inputPassword2" className="sr-only">Password</label>
      </div>
      <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>

<div className='App'>
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
  {items.map(item =>(

    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
    </tr>

  ))}
    </tbody>
</table>
        </div>
        </>
      )
    }
    
  }
}



export default App;
