import { action, thunk } from 'easy-peasy';
import uuid from 'uuid';

export default {
    todos: [
        // {
        //     id: 1,
        //     title: 'Take out trash',
        //     completed: true
        // },
        // {
        //     id: 2,
        //     title: 'Pickups kids from school',
        //     completed: false
        // },
        // {
        //     id: 3,
        //     title: 'Dinner with boss',
        //     completed: false
        // },
    ],

    // Thunks
    fetchTodos: thunk(async (actions) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const data = await res.json();
        actions.setTodos(data);
    }),

    setTodos: action((state, todos) => {
        state.todos = todos;
    }),

    //Actions
    toggle: action((state, id) => {
        state.todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
        })
    }),
    
    remove: action((state, id) => {
        // console.log(id);
        state.todos = state.todos.filter(todo => todo.id !== id);
    }),

    add: action((state, todo) => {
        todo.id = uuid.v4();
        state.todos = [todo, ...state.todos];
    })

}