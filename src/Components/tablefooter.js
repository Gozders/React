import React from 'react';

function TableFooter(props) {
    return (
        <tfoot>
        <tr>
          <td>Suma</td>
          <td>{props.sum}</td>
        </tr>
      </tfoot>
    )
}

export default TableFooter