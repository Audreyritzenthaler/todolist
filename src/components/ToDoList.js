import React, { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
  const [todosData, setToDosData] = useState([
    {id: 1, text: 'Make money', complete: false},
    {id: 2, text: 'Make love', complete: true},
    {id: 3, text: 'Make peace', complete: false},
    {id: 4, text: 'Make good dishes', complete: true}
  ])

  const ToDoItems = todosData.map(todoData => <ToDoItem complete={todoData.complete} text={todoData.text} checkFunction={checkFunc}/>)

  const checkFunc = (id) => {
    const dataTmp = [...todosData]
    const updatedTodos = dataTmp.map(todo => {
      if (todo.id === id) {
        setToDosData({ ...dataTmp, complete: !todo.complete })
      }
      return todo
    }
    )
  }

  return (
    <div className='listTodo'>
      { ToDoItems }
    </div>
  )
}

export default ToDoList