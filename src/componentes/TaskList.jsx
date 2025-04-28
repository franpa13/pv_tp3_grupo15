import React from 'react'
import { TaskItem } from './TaskItem'

export const TaskList = () => {
    return (
        <div style={{ width: "50%", border: '1px solid blue', padding: '10px' }}>
            TaskList
        <TaskItem style={{ width: "20%", border: '1px solid red', padding: '10px' }}></TaskItem>
        </div>
    )
}
