import React, {Component} from 'react';
import Chart from '../Chart/Chart';



class ChartCrypto extends Component{
    constructor(){
        super();
        this.state = {
            var:[]
        }
    }
    componentDidMount(){
        console.log("Se cargo el ");
        let url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10&interval=daily';

        fetch(url)
            .then(respuesta => {
                return respuesta.json()
            })    
            .then((data) => {
                const precios = data.prices.map(value=>{
                    return {
                        price: value[1].toFixed(2),
                        name: value[1].toFixed(2)
                    }
                });
                
                console.log(precios);
                this.setState({
                    var: precios
                })
            })
            .catch(error => console.log(error))
    }
    render(){
        return(
            <React.Fragment>
                <div className="row card-container">                
                    { 
                        this.state.var.length === 0 ?
                        <iframe src="https://giphy.com/embed/RgxAkfVQWwkjS" width="418" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> :
                        <Chart dataVar={this.state.var}/>
                    }
                </div>
            </React.Fragment>
        )
    }

}

export default ChartCrypto;