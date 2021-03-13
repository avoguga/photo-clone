import React, {useState} from 'react';
import './Style.css';
import Slider from './Slider';
import SidebarItem from './SidebarItem';

const defaultOptions = [
  {
    name: 'Brilho',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contraste',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturação',
    property: 'saturation',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Cinza',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'Blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  },
]


function App() {
  return (
    <div className="container">
      <div className="main-image"/>
      <div className="sidebar">
        <SidebarItem/>
        <SidebarItem/>
      </div>
      <Slider/>
    </div>
  );
}

export default App;
