import React from "react"
import Cryptos from './Components/Cryptos/Cryptos'
import Header from './Components/Header/Header'
import './App.css';

function App() {
  return (
  <body>
    <div id="wrapper">
      < div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
        <Header/>
          <div className="container-fluid">
          <nav className="navbar navbar-light bg-light justify-content-between">
          </nav>
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
           
              <h1 className="h3 mb-0 text-gray-800"></h1>
            </div>

            {/* <!-- Content Row --> */}
            <div className="row">
            
            </div>
            {/* <!-- Content Row --> */}
            <div className="row">
              {/* <!-- Last Product in DB --> */}
              <div className="col-lg-6 mb-4">
              </div>
              <div className="col-lg-6 mb-4">
              </div>
            </div>
            {/* Nueva sección Personajes */}
            <h3 className="h3"></h3>
            {/* Fin nueva sección Personajes */}
            
            {/* Nueva sección Rick and Morty */}
            <h3 className="h3"> Criptomonedas </h3>
            <Cryptos />
            {/* Fin nueva sección Rick and Morty */}            
          </div>
        </div>

      </div>


    </div>
  </body>
  );
  
}

export default App;
