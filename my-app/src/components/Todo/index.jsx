import React from 'react'

function Todo({text}) {
  return (
    <li>{text} <button>Delete</button></li>
  )
}

export default Todo