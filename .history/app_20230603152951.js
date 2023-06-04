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
const images = [];
for(const animal in animals){
    const image = {
        keys{animal}
        className'animal'
        alt
    }
}

const animalFacts = (<div>

    <h1>{title === ''? 'Click an animal for a fun facts!' : title}</h1>
    {background}
</div>);

root.render(animalFacts);