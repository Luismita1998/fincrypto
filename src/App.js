import React from "react"
import logo from './logo.svg';
<<<<<<< HEAD
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

=======
import './App.css';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header/>
    <main>
        <button type="button">Cargar más tarjetas</button>
        <section class="card-container">
            <article>
                <section class="navigation">
                    <div>
                        <i class="fas fa-chevron-left"></i>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <i class="far fa-window-close"></i>
                </section>
                <main>
                    <img src="./img/image-default.png" alt=""/>
                    <h3>Título/ Nombre</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p>
                    <section class="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                </main>
            </article>
            <article>
                <section class="navigation">
                    <div>
                        <i class="fas fa-chevron-left"></i>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <i class="far fa-window-close"></i>
                </section>
                <main>
                    <img src="./img/image-default.png" alt=""/>
                    <h3>Título/ Nombre</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere
                        laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta
                        perspiciatis! Sint, laboriosam cum.</p>
                    <section class="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                </main>
            </article>
            <article>
                <section class="navigation">
                    <div>
                        <i class="fas fa-chevron-left"></i>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <i class="far fa-window-close"></i>
                </section>
                <main>
                    <img src="./img/image-default.png" alt=""/>
                    <h3>Título/ Nombre</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere
                        laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta
                        perspiciatis! Sint, laboriosam cum.</p>
                    <section class="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                </main>
            </article>
            <article>
                <section class="navigation">
                    <div>
                        <i class="fas fa-chevron-left"></i>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <i class="far fa-window-close"></i>
                </section>
                <main>
                    <img src="./img/image-default.png" alt=""/>
                    <h3>Título/ Nombre</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere
                        laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta
                        perspiciatis! Sint, laboriosam cum.</p>
                    <section class="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                </main>
            </article>
            <article>
                <section class="navigation">
                    <div>
                        <i class="fas fa-chevron-left"></i>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <i class="far fa-window-close"></i>
                </section>
                <main>
                    <img src="./img/image-default.png" alt=""/>
                    <h3>Título/ Nombre</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere
                        laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta
                        perspiciatis! Sint, laboriosam cum.</p>
                    <section class="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                </main>
            </article>
            <article>
                <section class="navigation">
                    <div>
                        <i class="fas fa-chevron-left"></i>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <i class="far fa-window-close"></i>
                </section>
                <main>
                    <img src="./img/image-default.png" alt=""/>
                    <h3>Título/ Nombre</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere
                        laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta
                        perspiciatis! Sint, laboriosam cum.</p>
                    <section class="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                </main>
            </article>
            <article>
                <section class="navigation">
                    <div>
                        <i class="fas fa-chevron-left"></i>
                        <i class="fas fa-chevron-right"></i>
                    </div>
                    <i class="far fa-window-close"></i>
                </section>
                <main>
                    <img src="./img/image-default.png" alt=""/>
                    <h3>Título/ Nombre</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere
                        laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta
                        perspiciatis! Sint, laboriosam cum.</p>
                    <section class="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="">Ver más</a>
                </main>
            </article>
        </section>
    </main>
    <footer>
        <ul class="team">
            <li>Nombre integrante 1</li>
            <li>Nombre integrante 2</li>
            <li>Nombre integrante 3</li>
        </ul>
    </footer>
>>>>>>> f8d0c084bc54d9fedbb04ea5ecbf5b6d2cf00e27
    </div>
  );
  
}

export default App;
