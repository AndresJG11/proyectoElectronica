import React from 'react';
import './App.css';

import {AppBar} from './components/AppBar';
import { Carousel } from './components/Carousel';
import { Secciones } from './components/Secciones';
import { GridItems } from './components/GridItems';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Carousel />
      <Secciones />
      <GridItems />
    </div>
  );
}

export default App;
