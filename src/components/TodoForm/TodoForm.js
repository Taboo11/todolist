import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './TodoForm.module.css';

export function TodoForm({ inputHandler }) {
  const [text, setText] = useState('');

  function addTodoHandler(event) {
    event.preventDefault();
    inputHandler(text);
    setText('');
  }
  return (
    <>
      <form className={styles.form} onSubmit={addTodoHandler}>
        <input
          name="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Your task"
        />
        <Button type="submit">Add task</Button>
      </form>
    </>
  );
}
