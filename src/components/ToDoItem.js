import React from 'react'
import './ToDoItem.css'

const ToDoItem = ({ text, complete, checkFunction }) => {

  return (
    <div className='item'>
      <input
        className='checkBox'
        type='checkbox'
        checked={complete}
        onChange={e => checkFunction(e)} />
      <p className='inItem'>{text}</p>
    </div>
  )
}

export default ToDoItem