import React from 'react'
import AddTodos from './components/AddTodos';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';



function App() {

  return (
    <div>
      <h1>LEARNING REDUX</h1>

      <TotalCompleteItems />

      {/* add to dos form */}
      <AddTodos />


      {/* list to dos */}
      <TodoList />
    </div>
  )
}

export default App