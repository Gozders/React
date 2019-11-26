import React from 'react';

class Input extends React.Component {
   state = {
        inputValue:''
   }

   onInputChange = (event) => {
     
     this.setState({
        inputValue:event.target.value
     });
     console.log(event.target.value)
 }   
   

   render() {
      return (
         <div className='main'>
            <input type='text' onChange={this.onInputChange} placeholder='Wprowadź jakąś wartość' value={this.state.inputValue} />
         </div>
      )
   };
}

export default Input;