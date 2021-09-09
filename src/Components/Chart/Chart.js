import React, { Component } from 'react';
import  {LineChart, Line, Legend, CartesianGrid, XAxis, YAxis, Tooltip}  from 'recharts';


class Chart extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <div className="row card-container">                
                    {
                    <LineChart width={600} height={300} data={this.props.dataVar} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line name="Bitcoin for Quique" type="monotone" dataKey="price" stroke="black" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36}/>
                    </LineChart>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Chart