import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
        <p> Hello David Yuen</p>
        <Header />

        <div className ='app__body'>
          <Sidebar />
        </div>
    </div>
  );
}

export default App;
