import React from 'react'
import ToDoList from './components/ToDoList'
import './App.css'

const App = () => {

  return (
    <div className="App">
      <h1 className='title'>Things to do :</h1>
      <ToDoList />
    </div>
  )
}

export default App
