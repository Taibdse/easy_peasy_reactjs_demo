import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useActions } from 'easy-peasy';

const AddTodo = () => {
    const add = useActions(actions => actions.add);
    const [title, setTitle] = useState('');

    const submit = (e) => {
        e.preventDefault();
        add({ title, completed: false });
        setTitle('');
    }

    return (
        <div>
            <form onSubmit={submit}
            >
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Add todo title..."
                />
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    );
};

AddTodo.propTypes = {};

export default AddTodo;
