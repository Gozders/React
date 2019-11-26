import React from 'react';
import './index.css';
import TableHead from './Components/tablehead';
import TableBody from './Components/tablebody';
import TableFooter from './Components/tablefooter'


const datatable = [
  { month: "styczeń",
    cost: 500
  },
  {
    month: "luty",
    cost: 120
  },
  {
    month: "marzec",
    cost: 120
  },
  {
    month: "kwiecień",
    cost: 600
  },
  {
    month: "maj",
    cost: 120
  },
  {
    month: "czerwiec",
    cost: 330
  }
]

function GetSum(){
var suma=0;
      for (var i=1; i<datatable.length-1; i=i+1){
        suma=suma+datatable[i].cost;
      }
      return suma;
    }

function Table() {
  return (
    <div className="tab">
    <table>
       <TableHead />
        {datatable.map((item)=> {
          return ( <TableBody month={item.month} cost={item.cost} />)
        })
        }     
    <TableFooter sum={GetSum()}/>
    </table>
     </div>
  )
  }

export default Table;
