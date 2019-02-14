import React from 'react';

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