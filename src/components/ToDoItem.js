import React from 'react'
import './ToDoItem.css'

const ToDoItem = ({ text, complete, checkFunction, id }) => {

  return (
    <div className='item'>
      <input
        id={id}
        className='checkBox'
        type='checkbox'
        checked={complete}
        onChange={e => checkFunction(id)} />
      <p className='inItem'>{text}</p>
    </div>
  )
}

export default ToDoItem