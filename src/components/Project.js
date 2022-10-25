import React from 'react';
import Portfolio from './pages/Portfolio'

export default function Display() {
  return (
    <div>
        <Portfolio name={canine.name} description={canine.description} id={canine.id} />
    </div>
    <div>
        <Portfolio name={canine.name} description={canine.description} id={canine.id} />
    </div>
    <div>
        <Portfolio name={canine.name} description={canine.description} id={canine.id} />
    </div>
  );
}