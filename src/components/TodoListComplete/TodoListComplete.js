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
          Delete all tasks
        </button>
      ) : (
        <h2>Completed tasks</h2>
      )}
      {!compeleTodosCount && <h2>No unfinished tasks!</h2>}
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
