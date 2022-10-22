
import { useState } from 'react';
import './App.css';

function App() {

  const [things, setThings] = useState(["Thing 1"]);
  const [count, setCount] = useState(0);

  function addItem() {
    // let newThing = `Thing ${things.length + 1}`;
    // let newThing;
    // newThing = things;
    // newThing.push(`Thing ${things.length + 1}`);
    // setThings(newThing);
    // setCount(count + 1)

    setCount(preThing => {
      return [...preThing, `Thing ${things.length + 1}`]
    });

  }

  let thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
      {count}
    </div>
  );
}

export default App;
