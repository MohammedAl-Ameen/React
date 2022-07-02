
import React, { useState } from 'react';

function App() {
  
  const [data, setData] = React.useState([])
    
  React.useEffect( () => {
    const api = async ()=>{
      const res = await fetch("http://127.0.0.1:8000/api/product")
      const data = await res.json()
      setData(data)
    }

    api();
  }, [])

  console.log(1);
  return(
    data.map(product => 
    <>
    <p key={product.id}>Id: {product.id}</p> 
    <a key={product.id} href={`http://127.0.0.1:8000/api/product/${product.id}`} ><button>Edit</button></a>

    </>
    )
  )


}


export default App;
