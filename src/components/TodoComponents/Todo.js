import React from 'react';
import './Todo.css'

const Todo = props => {
    return (
        <li
            className={props.todo.completed ? 'task completed' : 'task'}
            onClick={() => props.toggleCompleted(props.todo.id)}
        >
            {props.todo.task}
        </li>
    )
}

export default Todo;