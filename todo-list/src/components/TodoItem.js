import React from 'react';
import classes from './TodoItem.module.css';
import check from '../images/icon-check.svg';
import cross from '../images/icon-cross.svg';

const TodoItem = (props) => {
  return (
		<li className={classes.todoItem}>
			<div className={classes.check}>
				<img src={check} />
			</div>
			<div className={classes.todo}>{props.todo}</div>
			<div className={classes.cross}>
				<img src={cross} />
			</div>
		</li>
	);
}

export default TodoItem;
