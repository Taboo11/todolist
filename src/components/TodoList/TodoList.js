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
      <h2>Не завершенные задачи</h2>
      {!notNewTodosCount && <h2>Новых задач нет!</h2>}
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
