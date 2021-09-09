import React, {Component} from 'react';
import Tarjetas from '../Tarjetas/Tarjetas';
import Header from '../Header/Header';


class Cryptos extends Component{
    constructor(){
        super();
        this.state = {
            cryptoGIL:[]
        }
    }
    componentDidMount(){
        console.log("Se cargo el cUmpUnente");
        let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

        fetch(url)
            .then(respuesta => {
                return respuesta.json()
            })    
            .then((data) => {
                console.log(data);
                this.setState({
                    cryptoGIL: data
                })
            })
            .catch(error => console.log(error))
    }
    borrarCrypto(id){
        let cryptosRemain = this.state.cryptoGIL.filter(crypto =>{
            return crypto.id != id
        })
        this.setState({
            cryptoGIL : cryptosRemain
        })
    }
    filtrarCrypto(cryptoAFiltrar){
        let cryptoFiltrado = this.state.cryptoGIL.filter(crypto =>{
            return crypto.name.toLowerCase().includes(cryptoAFiltrar.toLowerCase()) 
        } )
        this.setState({
            cryptoGIL : cryptoFiltrado
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="row card-container">                
                    { 
                        this.state.cryptoGIL.length === 0 ?
                        <p>Cargando aplicación...</p> :
                        this.state.cryptoGIL.map((crypto, index)=><Tarjetas key={crypto.name + index} dataCrypto={crypto}
                        //Aqui debemos pasarle el método (borrarTarjeta) al hijo
                        borrar = {(idEliminar) => this.borrarCrypto(idEliminar) }
                        />) 
                    }
                </div>
            </React.Fragment>
        )
    }

}

export default Cryptos;