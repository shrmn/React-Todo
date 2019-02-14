import React from 'react';

const Todo = props => {
    return (
        <li
            className={props.todo.completed ? 'completed' : null}
            onClick={() => props.toggleCompleted(props.todo.id)}
        >
            {props.todo}
        </li>
    )
}

export default Todo;