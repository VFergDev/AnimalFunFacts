import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);4

const title = '';
const animalFacts = <h1>{title === ''? 'Click an animal for a fun facts!' : title}</h1>;

root.render(animalFacts);