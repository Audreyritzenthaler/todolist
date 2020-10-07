import React, { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  const [todosData, setToDosData] = useState([
    {id: 1, text: 'Make money', complete: false},
    {id: 2, text: 'Make love', complete: true},
    {id: 3, text: 'Make peace', complete: false},
    {id: 4, text: 'Make good dishes', complete: true}
  ])

  const checkFunc = (id) => {
    const todosTmp = [...todosData]
    const updatedTodos = todosTmp.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
      return todo
    })
    setToDosData(todosTmp)
  }

  return (
    <div className='listTodo'>
      { todosData.map((todoData, i) =>
        <ToDoItem key={i} id={todoData.id} complete={todoData.complete} text={todoData.text} checkFunction={checkFunc}/>)
      }
    </div>
  )
}

export default ToDoList