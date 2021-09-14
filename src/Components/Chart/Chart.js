import react from 'react';
import React, { Component } from 'react';
import  {LineChart, Line, Legend, CartesianGrid, XAxis, YAxis, Tooltip}  from 'recharts';


class Chart extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.precioChart.length != 0){
            return(
                <React.Fragment>
                    <div className="row card-container">                
                        {
                            <LineChart width={600} height={300} data={this.props.precioChart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line name={this.props.dataNombre} type="monotone" dataKey="name" stroke="black" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey={this.props.dataNombre} />
                            <YAxis />
                            <Tooltip />
                            </LineChart> 
                        } 
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

export default Chart