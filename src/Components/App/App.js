import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Locator from '../Locator/Locator';
import Quotation from '../Quotation/Quotation';
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className="App">
        <Header />
        <Products />
        <Locator />
        <Quotation />
        <Footer />
    </div>
  );
}

export default App;
