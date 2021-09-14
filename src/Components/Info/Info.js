import React, {Component} from 'react';
import Chart from '../Chart/Chart';

class Info extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <React.Fragment>
               <p>{this.props.dataInfo}</p>
               <Chart precioChart={this.props.precio}/>
               <img src={this.props.dataImg} alt=""/>
               <p>{this.props.dataDesc}</p>
               <p>{this.props.dataMkt}</p>
               <p>{this.props.dataNombre}</p>
               {console.log(this.props.precio)}
            </React.Fragment>
        )
    }

}

export default Info;