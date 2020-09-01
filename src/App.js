import React from 'react';
import './App.css';

import {AppBar} from './components/AppBar';
import { Carousel } from './components/Carousel';
import { Secciones } from './components/Secciones';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Carousel />
      <Secciones />
    </div>
  );
}

export default App;
