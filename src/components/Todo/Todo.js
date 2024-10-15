import React, { useState, useRef } from 'react';
import {
  RiArticleLine,
  RiDeleteBin2Line,
  RiCheckLine,
  RiLoopLeftLine,
} from 'react-icons/ri';
import styles from './Todo.module.css';

export function Todo({
  todo,
  toggleTodoHandler,
  deleteTodoHandler,
  changeInputHandler,
}) {
  const [isEditing, setIsEditing] = useState(false); // Флаг редактирования
  const [taskText, setTaskText] = useState(todo.text); // Состояние текста задачи
  const inputRef = useRef(null); // Используем useRef для фокуса

  const handleEditClick = () => {
    setIsEditing(true); // Включаем режим редактирования
  };

  const handleBlur = () => {
    setIsEditing(false); // Выключаем режим редактирования при потере фокуса
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false); // Выключаем режим редактирования при нажатии Enter
    }
  };

  const handleChange = (e) => {
    setTaskText(e.target.value); // Обновляем текст задачи при вводе
    changeInputHandler(taskText, todo.id);
  };

  // Фокусируем input при переключении в режим редактирования
  React.useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div
      className={`${styles.todo} ${todo.isComplete ? styles.todoComplete : ''}`}
    >
      <RiArticleLine className={styles.todoIcon} />
      {isEditing ? (
        <input
          className={styles.inputStyle}
          type="text"
          ref={inputRef}
          value={taskText}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <div className={styles.todoText} onClick={handleEditClick}>
          {taskText}
        </div>
      )}
      <div className={styles.twoIcon}>
        {!todo.isComplete && (
          <RiCheckLine
            className={styles.checkIcon}
            onClick={() => toggleTodoHandler(todo.id)}
            title="Mark completed"
          />
        )}
        {todo.isComplete && (
          <RiLoopLeftLine
            className={styles.checkIcon}
            onClick={() => toggleTodoHandler(todo.id)}
            title="Restore the task"
          />
        )}
        {todo.isComplete && (
          <RiDeleteBin2Line
            className={styles.deleteIcon}
            title="Delete the task"
            onClick={() => deleteTodoHandler(todo.id)}
          />
        )}
      </div>
    </div>
  );
}
