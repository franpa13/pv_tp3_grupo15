import React from 'react';

export const TaskItem = ({ taskDetail, updateTask , deleteTask }) => {
  return (
    <li style={{ marginTop: "10px", marginBottom: "30px"  }}>
      <span
        style={{
          textDecoration: taskDetail.completed ? 'line-through' : 'none',
          color: taskDetail.completed ? 'blue' : 'black',
          marginRight: '20px'
        }}
      >
        {taskDetail.name}
      </span>
      <button onClick={() => updateTask(taskDetail.id)} style={{ marginLeft: "10px", cursor: "pointer" }}>
        Realizada
      </button>
      <button onClick={()=>deleteTask(taskDetail.id)} style={{ marginLeft: "10px", cursor: "pointer" }}>
        Eliminar
      </button>
    </li>
  );
};
