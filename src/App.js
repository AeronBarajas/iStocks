import './App.css';
import './styles.css'
import React from 'react';
import stockData from './components/stock-data';
import Main from './components/main';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Main stockData={stockData} />
    </div>
  );
}

export default App;
