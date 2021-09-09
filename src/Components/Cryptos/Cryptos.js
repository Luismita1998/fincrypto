import React, {Component} from 'react';
import Tarjetas from '../Tarjetas/Tarjetas';



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

    render(){
        return(
            <React.Fragment>
                <div className="row card-container">                
                    { 
                        this.state.cryptoGIL.length === 0 ?
                        <iframe src="https://giphy.com/embed/RgxAkfVQWwkjS" width="418" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> :
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