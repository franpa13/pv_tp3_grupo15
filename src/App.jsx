import { useState } from 'react'

import './App.css'
import { ToDoList } from './components/todoList'
import { ExtraExercices } from './components/extraExercices'

function App() {
  const [valueSelect, setValueSelect] = useState('todolist')

  return (
    <>
      <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', gap: '10px' }}>
        <span onClick={() => setValueSelect('todolist')} style={{ cursor: 'pointer', color: valueSelect === 'todolist' ? 'blue' : 'black', fontSize: '20px' }} >
          Lista de tareas
        </span>
        /
        <span onClick={() => setValueSelect('extra')} style={{ cursor: 'pointer', color: valueSelect === 'extra' ? 'blue' : 'black', fontSize: '20px' }} >
          Ejercicios extras
        </span>
      </div>
      {valueSelect === "todolist" ? (
        <ToDoList></ToDoList>
      ) : (
        <ExtraExercices></ExtraExercices>
      )}
    </>

  )
}

export default App
