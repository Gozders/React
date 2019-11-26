import React from 'react';
import './App.css';
import Button from './Components/button';



function AppButton() {

  function onButtonClick(){
    console.log("Wciśnięto przycisk");
  }

  return (
    <div className="App">
        <Button label="Wciśnij mnie" onClick={onButtonClick}/>
    </div>
  );
}

export default AppButton;
