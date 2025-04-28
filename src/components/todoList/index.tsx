import React from 'react'
import { TaskInput } from '../TaskInput'
import { TaskList } from '../TaskList'

export const ToDoList = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <h1>Lista de Tareas </h1>
            <TaskInput></TaskInput>
            <TaskList></TaskList>
        </div>
    )
}
