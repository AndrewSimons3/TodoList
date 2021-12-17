import React from 'react';
import classes from './TodoItem.module.css';
// import check from '../images/icon-check.svg';
// import cross from '../images/icon-cross.svg';

const TodoItem = (props) => {
  return (
    <div className={classes.todoItem}>
      {/* <img src={} /> */}
      {props.todo}
    </div>
  )
}

export default TodoItem;
