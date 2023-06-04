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
    const image = (
        keys{animal}
        className='animal'
        alt='{animal}'
        src:={animals{animal.image}}
        aria-label={animal}
        role='button'
    );
    images.push(image);
}


const animalFacts = (
<div>
00    <h1>{title === ''? 'Click an animal for a fun facts!' : title}</h1>
    {background}
    <div className='animals'>
        {images}
    </div>
</div>);

root.render(animalFacts);