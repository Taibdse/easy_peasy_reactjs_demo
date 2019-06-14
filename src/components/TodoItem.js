import React from 'react';
import PropTypes from 'prop-types';
import { useActions } from 'easy-peasy';

const TodoItem = ({ todo }) => {
    
    const { toggle, remove } = useActions(actions => ({
        remove: actions.remove,
        toggle: actions.toggle
    }));

    return (
        <div
            className="todo"
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
            <span onClick={() => toggle(todo.id)} style={{ cursor: "pointer" }}>
                {todo.title}
            </span>
            <button onClick={() => remove(todo.id)}>
                <i className="fas fa-trash-alt" />
            </button>
        </div>
    );
};

TodoItem.propTypes = {};

export default TodoItem;
