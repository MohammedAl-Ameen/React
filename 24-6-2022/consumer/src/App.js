import { Component } from 'react';
import {useState} from "react";

class App extends Component{

  constructor(){
    super();
    this.state = {
      users: [],
      isLoaded: true,
      search: "",
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
      users: data,
      isLoaded: true,
    })

    
  }


  // componentDidMount() {
  //       this.getUsers();
  //   }


  //   API = async () => {
  //     fetch("http://127.0.0.1/react/24-6-2022/provider/index.php")
  //       .then((res) => res.json())
  //         .then((json) => {
  //           this.setState
  //           ({
  //             items: json,
  //             isLoaded: true,
  //           });
      
  // })
  //   }


  // getUsers = async () => {
  //   const response = await fetch("http://127.0.0.1/react/24-6-2022/provider/index.php");
  //   const users = await response.json();
  //   console.log(users);
  //   return this.setState((this.state.users = users));
  // };

  // handelitems = (e) =>{
  //   this.setState({search: e.target.value})
    
  // }

  changeHandler = (e) => {
    this.setState({ search: e.target.value });
  };

  // finditems = () =>{
  //   return this.state.items.filter((items) => items.toLowerCase().includes(this.state.search.toLowerCase()))
  // }



  render(){

    // const [query , setQuery] = useState([]);
    // var {isLoaded , items} = this.state;
    if(!this.state.isLoaded){
      return <div>Loading....</div>
    }else{
      return(
        <>
                  <div className="form-group mb-2">
                      <label htmlFor="staticEmail2" className="sr-only">name</label>
                      <input type="text" placeholder="User Search" onChange={this.changeHandler} />
                      
                  </div>
      <div className="form-group mx-sm-3 mb-2">
      <label htmlFor="inputPassword2" className="sr-only">Password</label>
      </div>
      <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>

{
    this.state.users.filter((user) => user.name.includes(this.state.search)).map((user) => (
    <h2 key={user.id}>
      {user.id} - {user.name}
    </h2>
))}


<div className='App'>
{/* <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    </tbody>
</table> */}
        </div>
        </>
      )
    }
    
  }
}



export default App;
