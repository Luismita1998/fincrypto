import React from "react"
import Cryptos from './Components/Cryptos/Cryptos'



function App() {
  return (
    <div id="wrapper">
      
      < div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
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
            <h3 className="h3"> Personajes de películas</h3>
            {/* Fin nueva sección Personajes */}
            
            {/* Nueva sección Rick and Morty */}
            <h3 className="h3"> Rick and Morty</h3>
            <Cryptos />
            {/* Fin nueva sección Rick and Morty */}            
          </div>
        </div>

      </div>


    </div>
  );
  
}

export default App;
