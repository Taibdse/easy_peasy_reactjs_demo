import React from 'react';
import { createStore, StoreProvider } from 'easy-peasy';
import './App.css';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import model from './model';
const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="container">
        <Todos/>
        <AddTodo/>
      </div>
    </StoreProvider>
  );
}

export default App;
