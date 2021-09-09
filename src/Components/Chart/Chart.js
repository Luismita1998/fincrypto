import React, { Component } from 'react';
import  {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip}  from 'recharts';
const data = [{name: '54000', uv: 54000},{name: '49800', uv: 49800},{name: '47000', uv: 47000, pv: 2400, amt: 2400},{name: '39000', uv: 39000}];

const renderLineChart2 = (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );



class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <React.Fragment>
                <div className="row card-container">                
                    {
                    <LineChart width={600} height={300} data={this.props.dataVar} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    </LineChart>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Chart