import React from 'react'
import { TaskItem } from './TaskItem'

export const TaskList = ({ tasks, updateTask, deleteTask }) => {

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

            <ul >

                {tasks.length > 0 ? tasks?.map((task) => {
                    return (
                        <TaskItem deleteTask={deleteTask} updateTask={updateTask} taskDetail={task} key={task.id}></TaskItem>
                    )
                }) : (
                    <span style={{marginTop:"15px"}} > no se encontraron tareas.... </span>
                )}



            </ul>
        </div>
    )
}
