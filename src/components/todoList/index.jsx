import React, { useState } from 'react'
import { TaskInput } from '../TaskInput'
import { TaskList } from '../TaskList'
import { addTask } from '../../utils/addTask'
import { deleteTask } from '../../utils/deleteTask'
import { updateTask } from '../../utils/updateTask'

export const ToDoList = () => {
    const [valueInput, setValueInput] = useState('')
    const [error, setError] = useState(false)
    const [taskList, setTaskList] = useState([
    ])


    return (
        <>
            <h1 style={{textAlign:"center"}}>Lista de Tareas </h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', fontSize: "20px" }}>
                <TaskInput inputStyle={{ fontSize: "16px" }} value={valueInput} setValue={setValueInput} onSubmit={() => addTask(valueInput, setTaskList, setValueInput, setError, taskList)}></TaskInput>
                <TaskList deleteTask={(id) => deleteTask(id, taskList, setTaskList)} updateTask={(id) => updateTask(id, taskList, setTaskList)} tasks={taskList} />
                {error && <span style={{ color: 'red' }}>Por favor ingresa una tarea</span>}
            </div>
        </>

    )
}
