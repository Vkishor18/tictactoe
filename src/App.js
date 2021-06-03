import React from "react";
import Board from './components/Board';
import './styles/root.scss';
import { useState } from 'react';
const App = () =>
{
  
  return (
  <div className = "app" >
    <h1>TIC TAC TOE </h1>
    <Board />
  </div>
  );
}

export default App;
