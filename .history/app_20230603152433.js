import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);4

const title = '';
const background = <img
  className='background'
  alt='ocean'
  src='images/ocean.jpg'
  />
const animalFacts = (<div);

root.render(animalFacts);