import React from 'react'
import './ToDoItem.css'

const ToDoItem = ({ text, complete, checkFunction, id }) => {

  return (
    <div className='item'>
      <label className={complete ? 'tadam' : null}>
      <input
        id={id}
        className='checkBox'
        type='checkbox'
        checked={complete}
        onChange={e => checkFunction(id)} />
      {text}
      </label>
    </div>
  )
}

export default ToDoItem