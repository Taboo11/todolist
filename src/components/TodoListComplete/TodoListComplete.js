import { Todo } from '../Todo/Todo';
import styles from './TodoListComplete.module.css';

export function TodoListComplete({
  todos,
  toggleTodoHandler,
  compeleTodosCount,
  deleteTodoHandler,
  deleteAllTodos,
  changeInputHandler,
}) {
  return (
    <div className={styles.todoListComplete}>
      {compeleTodosCount ? (
        <button
          className={styles.deleteAllButton}
          onClick={() => deleteAllTodos()}
        >
          Удалить все задачи
        </button>
      ) : (
        <h2>Завершенные задачи</h2>
      )}
      {!compeleTodosCount && <h2>Нет незавершенных задач!</h2>}
      {todos.map(
        (todo) =>
          todo.isComplete && (
            <Todo
              todo={todo}
              key={todo.id}
              toggleTodoHandler={toggleTodoHandler}
              deleteTodoHandler={deleteTodoHandler}
              changeInputHandler={changeInputHandler}
            />
          )
      )}
    </div>
  );
}
