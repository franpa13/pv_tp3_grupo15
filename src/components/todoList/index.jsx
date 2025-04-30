import React, { useState } from 'react'
import { TaskInput } from '../TaskInput'
import { TaskList } from '../TaskList'

export const ToDoList = () => {
    const [valueInput, setValueInput] = useState('')
    const [error, setError] = useState(false)
    const [taskList, setTaskList] = useState([

    ])
    // mandar estas funciones a la carpeta utils (export const...)
    // add Task
    const addTask = (value) => {
        if (value) {
            setError(false)
            setTaskList([...taskList, { id: Date.now(), name: value, completed: false }])
            setValueInput('')
        }
        else {
            setError(true)
        }
    }
    // updateTask
    const updateTask = (id) => {

        const newTaskList = taskList.map((task) => {
            if (task.id == id) {
                return { ...task, completed: !task.completed }
            }
            return task
        })
        setTaskList(newTaskList)
    }


    // deleteTask
    const deleteTask = (id) => {
        const newTaskList = taskList.filter((task) => task.id !== id)
        setTaskList(newTaskList)
    }


    return (
        <>
            <h1 style={{textAlign:"center"}}>Lista de Tareas </h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', fontSize: "20px" }}>
                <TaskInput inputStyle={{ fontSize: "16px" }} value={valueInput} setValue={setValueInput} onSubmit={addTask}></TaskInput>
                <TaskList deleteTask={deleteTask} updateTask={updateTask} tasks={taskList} ></TaskList>
                {error && <span style={{ color: 'red' }}>Por favor ingresa una tarea</span>}
            </div>
        </>

    )
}
