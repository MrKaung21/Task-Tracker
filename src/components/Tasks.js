import { useState } from "react"
import Task from "./Task"

const Tasks = ({ tasks, deleteTask }) => {
  return (
    <>
        {tasks.map((task) => (
            <Task task={task} key={task.id} deleteTask={deleteTask} />
        ))}
    </>
  )
}

export default Tasks