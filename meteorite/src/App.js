import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

/*
use the keyword 'data' to access the JSON Datacontainer
Iterate over the container like this:
data.forEach((value, index) => {
         console.log(value.year);
     })

Access a single JSON Object like this:
data[0].year;
 */

class App extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }
  render() {
    const position = [51.505,-0.09]
    return (
        <Map className={"Map"} center={position} zoom= {13} >
          <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
    )
  }
}

export default App;
