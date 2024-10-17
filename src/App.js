import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { TodoForm } from './components/TodoForm/TodoForm';
import { BodyTodo } from './components/BodyTodo/BodyTodo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Загрузка задач из localStorage при загрузке компонента
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Сохранение задач в localStorage при изменении списка задач
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      localStorage.removeItem('todos'); // Очищаем localStorage, если нет задач
    }
  }, [todos]);

  function inputHandler(text) {
    if (text.trim() === '') {
      // Проверяем, если текст пустой или состоит только из пробелов, то выходим из функции
      return;
    }

    const newTodo = {
      text: text,
      isComplete: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  }

  function changeInputHandler(newText, id) {
    return setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : { ...todo }
      )
    );
  }

  function toggleTodoHandler(id) {
    return setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : { ...todo }
      )
    );
  }

  function deleteTodoHandler(id) {
    return setTodos(todos.filter((todo) => todo.id !== id));
  }

  function deleteAllTodos() {
    return setTodos(todos.filter((todo) => !todo.isComplete));
  }

  const compeleTodosCount = todos.filter((todo) => todo.isComplete).length;
  const notNewTodosCount = todos.filter((todo) => !todo.isComplete).length;

  return (
    <div className="App">
      <TodoForm inputHandler={inputHandler} />

      <BodyTodo
        todos={todos}
        toggleTodoHandler={toggleTodoHandler}
        compeleTodosCount={!!compeleTodosCount}
        notNewTodosCount={!!notNewTodosCount}
        deleteTodoHandler={deleteTodoHandler}
        deleteAllTodos={deleteAllTodos}
        changeInputHandler={changeInputHandler}
      />
    </div>
  );
}

export default App;
