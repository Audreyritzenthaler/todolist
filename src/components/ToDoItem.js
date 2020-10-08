import React from 'react'
import './ToDoItem.css'

const ToDoItem = ({ text, complete, checkFunction, id, removeTodo }) => {

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
        <button id={id} className='removeBtn' onClick={e => removeTodo(id)}><i class="fas fa-trash-alt"></i></button>
    </div>
  )
}

export default ToDoItem