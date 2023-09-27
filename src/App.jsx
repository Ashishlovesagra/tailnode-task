import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo = {
        text: inputText,
        completed: false,
        timestamp: Date.now(),
      };
      setTodos([newTodo, ...todos]);
      setInputText('');
    }
  };

  const markComplete = (timestamp) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.timestamp === timestamp) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  // Filter and sort active and completed todos
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="App">
      <header>
        <h1>TODO App</h1>
        <button onClick={resetTodos} className="reset-button">
          Reset
        </button>
      </header>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new TODO"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTodo();
            }
          }}
        />
        <button onClick={addTodo} className="add-button">
          Add
        </button>
      </div>
      <div className="todo-list">
        <h2>Active TODOs</h2>
        {activeTodos.map((todo) => (
          <div
            key={todo.timestamp}
            className={`todo-card ${todo.completed ? 'completed' : ''}`}
            onClick={() => markComplete(todo.timestamp)}
          >
            {todo.text}
          </div>
        ))}
        <h2>Completed TODOs</h2>
        {completedTodos.map((todo) => (
          <div
            key={todo.timestamp}
            className={`todo-card ${todo.completed ? 'completed' : ''}`}
            onClick={() => markComplete(todo.timestamp)}
          >
            {todo.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
