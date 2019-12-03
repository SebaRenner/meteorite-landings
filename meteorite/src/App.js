import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from 'react-google-charts';

function App() {
    // var googleApiKey = "AIzaSyDEY6hLnwxQ61vIcIEi5-PLDla86XMp2dU";
    return (
      <Chart
          width={'1000px'}
          height={'800px'}
          chartType="GeoChart"
          data={[
              ['Country', 'Popularity'],
              ['Germany', 200],
              ['United States', 300],
              ['Brazil', 400],
              ['Canada', 500],
              ['France', 600],
              ['Russia', 700]
          ]}
          options = {{
          displayMode: 'markers',
          colorAxis: {colors: ['yellow', 'blue']}
          }}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey = "AIzaSyBCtntq40U0DMUdry8-Nr4fLy8WbfOb5GM"
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