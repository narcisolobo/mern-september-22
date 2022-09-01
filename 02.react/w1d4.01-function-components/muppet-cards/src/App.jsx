import React from 'react';
import MuppetCard from './components/MuppetCard';
import Lux from './Lux.css';
import './App.css';
import { muppets } from './data/muppets';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {
            muppets.map((muppet, idx) => {
              return (
                <MuppetCard
                  key = {idx}
                  name = {muppet.name}
                  job = {muppet.job}
                  location = {muppet.location}
                  age = {muppet.age}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App;