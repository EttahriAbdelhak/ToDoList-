import React, { useState } from 'react'

function ToDoList() {


    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")



    function HandleInputChange(event) {
        setNewTask(event.target.value);

    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }


    return (<div className='to-do-list'
    >

        <h1>To-Do-List</h1>

        <div>
            <input
                type="text"
                placeholder='Write a Task'
                value={newTask}
                onChange={HandleInputChange} />
            <button
                className='add-button'
                onClick={addTask} >
                Add
            </button>
        </div>
        <ol>
            {tasks.map((task, index) =>
                <li key={index}  ><span className='tasks' > {task} </span>
                    <button className='delete-button'
                        onClick={() => deleteTask(index)}
                    >Delete</button>
                    <button className='Up-button'
                        onClick={() => moveTaskUp(index)}
                    >Up</button> <button className='Down-button'
                        onClick={() => moveTaskDown(index)}
                    >Down</button>



                </li>)
            }
        </ol>



    </div>)
}

export default ToDoList