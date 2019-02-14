import React from 'react';

const Todo = props => {
    return (
        <li
            className={props.completed ? 'completed' : ''}
            onClick={() => props.toggleCompleted(props.id)}
        >
            {props.todo}
        </li>
    )
}

export default Todo;