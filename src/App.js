import React from "react"
import Cryptos from './Components/Cryptos/Cryptos'
import Header from './Components/Header/Header'
import Footer from "./Components/Footer/Footer";
import './App.css';

function App() {
  return (
  <body>
    <div id="wrapper">
      < div id="content-wrapper" className="d-flex flex-column">

        <div id="content">
        <Header/>
          <div className="container-fluid">
                 
          <Cryptos />
        
          </div>
        </div>
        
      </div>


    </div>
    <Footer />
  </body>
  );
  
}

export default App;
