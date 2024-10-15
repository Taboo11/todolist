import { TodoList } from '../TodoList/TodoList';
import { TodoListComplete } from '../TodoListComplete/TodoListComplete';
import style from './BodyTodo.module.css';

export function BodyTodo({
  todos,
  toggleTodoHandler,
  compeleTodosCount,
  notNewTodosCount,
  deleteTodoHandler,
  deleteAllTodos,
  changeInputHandler,
}) {
  return (
    <div className={style.bodyTodo}>
      <TodoList
        todos={todos}
        toggleTodoHandler={toggleTodoHandler}
        notNewTodosCount={notNewTodosCount}
        changeInputHandler={changeInputHandler}
      />
      <hr />
      <TodoListComplete
        todos={todos}
        toggleTodoHandler={toggleTodoHandler}
        compeleTodosCount={compeleTodosCount}
        deleteTodoHandler={deleteTodoHandler}
        deleteAllTodos={deleteAllTodos}
        changeInputHandler={changeInputHandler}
      />
    </div>
  );
}
