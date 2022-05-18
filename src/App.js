import React from "react";
import StockXAPI from "stockx-api";
import Navbar from './component/Navbar.js';
import Meme from './component/Meme.js';
import utils from './utils.js';
import Form from './component/Form.js';
import Testing from './component/Testing.js'

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="main-content">
        <Testing />
      </div>
    </div>
  )
}

export default App;