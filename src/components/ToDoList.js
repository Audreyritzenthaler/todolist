import React, { useState } from 'react'
import ToDoItem from './ToDoItem'
import './ToDoList.css'

const ToDoList = () => {
  const [todo, setTodo] = useState({
    id: '',
    text: null,
    complete: false
  })
  const [todosData, setToDosData] = useState([
    {id: 1, text: 'Make money', complete: false},
    {id: 2, text: 'Make code', complete: true},
    {id: 3, text: 'Make peace', complete: false},
    {id: 4, text: 'Make good dishes', complete: true}
  ])

  const checkFunc = (id) => {
    const todosTmp = [...todosData]
    todosTmp.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
      return todo
    })
    setToDosData(todosTmp)
  }

  const addTodo = (e) => {
    e.preventDefault()
    const todosTmp = [...todosData]
    todosTmp.push(todo)
    setToDosData(todosTmp)
    setTodo({ id: '', text: '', complete: false})
  }

  const removeTodo = (id) => {
    const todosTmp = [...todosData]
    const index = todosTmp.findIndex((el) => el.id === id)
    todosTmp.splice(index, 1)
    setToDosData(todosTmp)
  }

  return (
    <div className='listTodo'>
      { todosData.map((todoData, i) =>
        <>
          <ToDoItem key={i} id={todoData.id} complete={todoData.complete} text={todoData.text} checkFunction={checkFunc} removeTodo={removeTodo} />
        </>
      )}
      <form className='form' onSubmit={e => addTodo(e)}>
        <input className='additemInput' name='add' value={todo.text} placeholder='Add an item !' onChange={e => setTodo({ ...todo, text: e.target.value, id: todosData.length +1 })}/>
        <button className='addBtn' disabled={!todo.text}><i class="fas fa-plus-circle addBtnIcone"></i></button>
    </form>
    </div>
  )
}

export default ToDoList