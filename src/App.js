import React from 'react';
import logo from './logo.svg';
import './App.css';

import Table from './table'
import Input from './input'
import AppButton from './AppButton'
import Task3_1 from './Task3_1'

function App() {
  return (
    <div className="App">
      <p>Zadanie pierwsze z tabelką i propsami  <Table /> </p>
       
      <p>Zadanie drugie wprowadzanie danych do inputa i wyświetlenie w Consoli  <Input /> </p>
      <p>Zadanie trzecie z przyciekiem i przechwytywaniem jego kliknięcia - wynik w cnsoli  <AppButton /> </p>
      <p>Zadanie czwarte z polami formularza wynik w consoli <Task3_1 /> </p>
    </div>
  );
}

export default App;
