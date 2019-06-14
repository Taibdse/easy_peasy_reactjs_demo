import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import { useStore, useActions } from 'easy-peasy';

const Todos = () => {
    const todos = useStore(state => state.todos);
    const fetchTodos = useActions(actions => actions.fetchTodos);

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <Fragment>
            <h1>Todos</h1>
            <p>Click todo item to toggle completed</p>
            <hr />
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </Fragment>
    );
};

Todos.propTypes = {};

export default Todos;
