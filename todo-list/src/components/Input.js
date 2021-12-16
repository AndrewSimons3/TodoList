import React from 'react';
import classes from './Input.module.css';

const Input = () => {
  return (
    <div className={classes['input-container']}>
      <input className={classes.input} type='text' id="todo" placeholder='Create a new todo...' />
    </div>
  )
}

export default Input;
