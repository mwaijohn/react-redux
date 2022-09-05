import React from 'react'
import { useDispatch } from 'react-redux';
import AddTodos from './components/AddTodos';
import TodoList from './components/TodoList';
import { addTodo } from './redux/todoslice'


function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>LEARNING REDUX</h1>
      <button onClick={() => dispatch(addTodo({
        title: "New Title"
      }))} >Add new to To do</button>

      {/* add to dos form */}
      <AddTodos />


      {/* list to dos */}
      <TodoList />
    </div>
  )
}

export default App