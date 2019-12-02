import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from 'react-google-charts';

function App() {

    var googleApiKey = "AIzaSyDEY6hLnwxQ61vIcIEi5-PLDla86XMp2dU";

  return (

      <Chart
          width={'1000px'}
          height={'800px'}
          chartType="GeoChart"
          data={[
              ['City',   'Population', 'Area'],
              ['Rome',      2761477,    1285.31],
              ['Milan',     1324110,    181.76],
              ['Naples',    959574,     117.27],
              ['Turin',     907563,     130.17],
              ['Palermo',   655875,     158.9],
              ['Genoa',     607906,     243.60],
              ['Bologna',   380181,     140.7],
              ['Florence',  371282,     102.41],
              ['Fiumicino', 67370,      213.44],
              ['Anzio',     52192,      43.43],
              ['Ciampino',  38262,      11]
          ]}
          options = {{
          region: 'IT',
          displayMode: 'markers',
          colorAxis: {colors: ['yellow', 'blue']}
          }}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey = "AIzaSyDEY6hLnwxQ61vIcIEi5-PLDla86XMp2dU"
          // no idea what this does
          rootProps={{ 'data-testid': '1' }}
      />

  );
}

export default App;


/*
   <div className="App">
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
         Edit <code>src/App.js</code> and save to reload.
       </p>

       <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
         Learn React
       </a>
       Where are my Meteorites at ( ͡▧ ͜ʖ ͡▧)
     </header>
   </div>
*/