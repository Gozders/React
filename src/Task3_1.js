import React from 'react';


class Task3_1 extends React.Component { 
   state = {
     defaultAge: 16,
     sexValue: 'male'
   }

services = (event) => {
  if (event.target.value==="male" || event.target.value==="female") 
    this.setState({
      sexValue:event.target.value
    })
   else 
    this.setState({
      defaultAge:event.target.value
    })
}

ClickButton = (event) => {
  console.log("Aktualne wartości: "+this.state.defaultAge+" "+this.state.sexValue);
  setTimeout(()=>{}, 3000)
}

  render() {
  return (
    <div className="App">
      <form>
        <div> 
            Podaj wiek: <input name="age" type='range' min="16" max="65" onChange={this.services} value={this.state.defaultAge}></input>
        </div>
        <div>
          <select name="sex" onClick ={this.services}>
            <option name="male" value="male" >Mężczyzna</option>
            <option name="female" value="female" >Kobieta</option>
          </select>
        </div>       
        <div> 
 
        </div> 
      </form>
      <button onClick={ this.ClickButton }>Value do konsoli</button>
    </div>
  );
  }
}

export default Task3_1;
