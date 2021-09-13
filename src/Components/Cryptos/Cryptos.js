import React, {Component} from 'react';
import Tarjetas from '../Tarjetas/Tarjetas';
import FiltrarCrypto from '../FiltrarCrypto/FiltrarCrypto'
import Info from '../Info/Info'


class Cryptos extends Component{
    constructor(){
        super();
        this.state = {
            crypto:[],
            cryptoInicial: [],
            contador: 12,
            dataId: '',
            dataDesc: '',
            dataNombre: '',
            dataImg: '',
            dataMkt: ''
        }
    }
    componentDidMount(){
        console.log("Se cargo el ");
        let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page='+this.state.contador+'&page=1&sparkline=false';

        fetch(url)
            .then(respuesta => {
                return respuesta.json()
            })    
            .then((data) => {
                console.log(data);
                this.setState({
                    crypto: data,
                    cryptoInicial: data,
                })
            })
            .catch(error => console.log(error))
    }
    borrarCrypto(id){
        let cryptosRemain = this.state.crypto.filter(crypto =>{
            return crypto.id != id
        })
        this.setState({
            crypto : cryptosRemain
        })
    }
    filtrarCrypto(cryptoAFiltrar){
        let filtrarPor = this.state.cryptoInicial.filter(crypto =>{
            return crypto.name.toLowerCase().includes(cryptoAFiltrar.toLowerCase()) 
        } )
        this.setState({
            crypto : filtrarPor
        })
    }
    masCryptos(){
        this.state.contador = this.state.contador + 12
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page='+this.state.contador+'&page=1&sparkline=false')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then((data) => {
            console.log(data);
            this.setState({
                crypto: data,
                cryptoInicial: data,
            })
        })
    }
    chartCryptoInfo(idCrypto){
        console.log("HOLAA");
        let url2 = 'https://api.coingecko.com/api/v3/coins/'+ idCrypto+'?localization=true&tickers=true&market_data=true&community_data=true';

        fetch(url2)
        .then(respuesta => {
            return respuesta.json()
        })    
        .then((data) => {
           console.log(data);
            
            this.setState({
                dataId: data.id,
                dataDesc: data.description.es,
                dataNombre: data.name,
                dataImg: data.image.large,
                dataMkt: data.market_data.current_price.usd
            })
        })
        .catch(error => console.log(error))
        
        }
    render(){
        return(
            <React.Fragment>
                    <Info dataId = {this.state.dataId}
                    dataDesc = {this.state.dataDesc}
                    dataNombre = {this.state.dataNombre}
                    dataImg = {this.state. dataImg}
                    dataMkt = {this.state.dataMkt}/>
                 <div>
                    <FiltrarCrypto  filtrarCrypto = { (texto) => this.filtrarCrypto(texto) } />
                    <button onClick= {() => this.masCryptos()} id="cargar" className="btn btn-outline-dark my-2 my-sm-0" type="button">Cargar más 12 Cryptos mas</button>
                </div> 
                <div className="row card-container">                
                    { 
                        this.state.crypto.length === 0 ?
                        <iframe src="https://giphy.com/embed/RgxAkfVQWwkjS" width="418" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> :
                        this.state.crypto.map((crypto, index)=><Tarjetas key={crypto.name + index} dataCrypto={crypto}
                        //Aqui debemos pasarle el método (borrarTarjeta) al hijo
                        borrar = {(idEliminar) => this.borrarCrypto(idEliminar) }
                        infoChart = {(idCrypto)=> this.chartCryptoInfo(idCrypto)}
                        />) 
                    }
                </div>
            </React.Fragment>
        )
    }

}

export default Cryptos;