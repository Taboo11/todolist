import { Todo } from '../Todo/Todo';
import styles from './TodoList.module.css';

export function TodoList({
  todos,
  toggleTodoHandler,
  notNewTodosCount,
  changeInputHandler,
}) {
  return (
    <div className={styles.todoList}>
      <h2>Uncompleted tasks</h2>
      {!notNewTodosCount && <h2>No new tasks!</h2>}
      {todos.map(
        (todo) =>
          !todo.isComplete && (
            <Todo
              todo={todo}
              key={todo.id}
              toggleTodoHandler={toggleTodoHandler}
              changeInputHandler={changeInputHandler}
            />
          )
      )}
    </div>
  );
}
