import React, {Component} from 'react';
import Chart from '../Chart/Chart';
import NumberFormat from 'react-number-format';

class Info extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        if(this.props.dataMkt != ""){
            return(
                <React.Fragment>
                   <div> 
                   <h1>{this.props.dataNombre} ({this.props.dataTick})</h1>
                   </div>
                   <div className="d-flex flex-wrap justify-content-around">
                   <img className="fotito" src={this.props.dataImg} alt=""/>
                   <div class="d-flex flex-column bd-highlight mb-3">
                   <div class="p-2 bd-highlight"><h2>Price:<NumberFormat
                        value={this.props.dataMkt}
                        className="foo"
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        renderText={(value, props) => <div {...props}>{value}</div>}
                    /></h2></div>
                    <div class="p-2 bd-highlight"><h2>Market cap:<NumberFormat
                        value={this.props.dataCap}
                        className="foo"
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        renderText={(value, props) => <div {...props}>{value}</div>}
                    /></h2></div>
                    <div class="p-2 bd-highlight"><h2> Circulating:<NumberFormat
                        value={this.props.dataCir}
                        className="foo"
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={''}
                        renderText={(value, props) => <div {...props}>{value}</div>}
                    /></h2></div>
                    <div class="p-2 bd-highlight"><h2>Supply:<NumberFormat
                        value={this.props.dataMax}
                        className="foo"
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={''}
                        renderText={(value, props) => <div {...props}>{value}</div>}
                    /></h2></div>
                    </div> 
                   <Chart precioChart={this.props.precio}/>
                   <p>{this.props.dataDesc}</p>
                   {console.log(this.props.precio)}
                   </div>
                </React.Fragment>
            )
        }else{
            return(
                <React.Fragment>

                </React.Fragment>
            )
        }
    }

}

export default Info;