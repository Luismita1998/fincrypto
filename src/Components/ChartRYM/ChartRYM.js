import React, {Component} from 'react';
import Chart from '../Chart/Chart';



class ChartRYM extends Component{
    constructor(){
        super();
        this.state = {
            var:[]
        }
    }
    componentDidMount(){
        console.log("Se cargo el cUmpUnente222");
        let url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily';

        fetch(url)
            .then(respuesta => {
                return respuesta.json()
            })    
            .then((data) => {
                console.log(data);
                this.setState({
                    var: data
                })
            })
            .catch(error => console.log(error))
    }
    render(){
        return(
            <React.Fragment>
                {/* <div className="row card-container">                
                    { 
                        this.state.var.length === 0 ?
                        <p>Cargando aplicación...</p> :
                        this.state.var.prices.map((prices, index)=><Chart key={prices.prices + index} dataVar={prices}
                        //Aqui debemos pasarle el método (borrarTarjeta) al hijo
                        />) 
                    }
                </div> */}
            </React.Fragment>
        )
    }

}

export default ChartRYM;