import React from 'react'
import "./Table.css"

function Table({info}) {

  return (
    <div>
      <table>
        <tr>
          <td>Name</td>
          <td>{info.name}</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>{info.age}</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>{info.Address}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{info.email}</td>
        </tr>
      
      
        
      </table>
    </div>
  )
}

export default Table