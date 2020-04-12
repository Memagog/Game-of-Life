import React, { Component } from 'react';
import Board from '../containers/board';
import Control from '../containers/control';
import Counter from '../containers/counter';



export default () => (
  <div>
    <h1>Game of Life </h1>
    <Control />
    
    <Board />
   
    <Counter />
   
  </div>
)
