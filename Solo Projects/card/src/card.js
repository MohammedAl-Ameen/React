import React from 'react';
import './card.css';
import Cover from "./components/cover.js";
import Body from "./components/body.js";
import Footer from "./components/footer";

function App() {
  return (
    <div className='container'>
      <Cover />
      <Body />
      <Footer />
    </div>

  );
}

export default App;
