import React, { Component} from 'react';
import { 
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from "bizcharts";

async function getData(){
  const response = await fetch('/temperature/search');
  const json = await response.json();
  return json;
}

export default class ChartBars extends Component {
  state = {
    data: [
      {id:1, sensor: 'Sensor 1', temp: 23},
      {id:1, sensor: 'Sensor 2', temp: 23},
      {id:1, sensor: 'Sensor 3', temp: 23},
      {id:1, sensor: 'Sensor 4', temp: 23},
    ],
    cols: {id: {range: [0,1]}}
  }

  render(){
    const loop = setTimeout(() => {
      let test = getData();
      Promise.resolve(test).then((dataReceived) =>{
        let insert = [
          {id:(this.state.data.length / 4) + 1, sensor: 'Sensor 1', temp: dataReceived[0].temperatura},
          {id:(this.state.data.length / 4) + 1, sensor: 'Sensor 2', temp: dataReceived[1].temperatura},
          {id:(this.state.data.length / 4) + 1, sensor: 'Sensor 3', temp: dataReceived[2].temperatura},
          {id:(this.state.data.length / 4) + 1, sensor: 'Sensor 4', temp: dataReceived[3].temperatura},
        ]
        let temperaturas = [...this.state.data, insert[0], insert[1], insert[2], insert[3]]
          if(temperaturas.length > 160) {
            temperaturas = [...insert[0], insert[1], insert[2], insert[3]];
          }
        this.setState({data: temperaturas})
      })
    }, 1000 * 180)
    
    return(
      <div>
        <Chart height={400} data={this.state.data} scale={this.state.cols} forceFit>
          <Legend />
          <Axis name="id" />
          <Axis
            name="temp"
            label={{
              formatter: val => `${val}°C`
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="id*temp"
            size={2}
            color={"sensor"}
            shape={"smooth"}
          />
      	</Chart>
      </div>
    )
  }
}