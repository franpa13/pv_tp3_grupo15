import { useState } from 'react'

import './App.css'
import { TaskInput } from './componentes/TaskInput'
import { TaskList } from './componentes/TaskList'

function App() {


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <h1>Lista de Tareas </h1>
      <TaskInput></TaskInput>
      <TaskList></TaskList>
    </div>
  )
}

export default App
