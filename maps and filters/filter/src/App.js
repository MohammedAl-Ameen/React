
import './App.css';
import data from "./data"


function App() {
  // const nums = [1, 2, 3, 4, 5, 6];
  // const squared = nums.map(function (num) {
  //   return num * num
  // })
  const cards = data.map(item => {
    return (
      [item.title, item.description]
    )
  })
  console.log(cards);
  return (
    <>
      {cards}
    </>
  );
}

export default App;
