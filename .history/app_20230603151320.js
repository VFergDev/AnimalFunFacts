import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const title = '';
const animalFacts = <h1>{title === ''? 'Click an'}</h1>