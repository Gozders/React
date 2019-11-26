import React from 'react';

function TableBody(props) {
        return (
        <tbody>
            <tr>
                <td>{props.month}</td>
                <td>{props.cost}</td>
            </tr>
        </tbody>
    )
  }

  export default TableBody