import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Locator from '../Locator/Locator';


function App() {
  return (
    <div className="App">
        <Header />
        <Products />
        <Locator />
    </div>
  );
}

export default App;
