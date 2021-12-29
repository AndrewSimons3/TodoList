import React, { useState } from 'react';
import classes from './TodoItem.module.css';
import check from '../images/icon-check.svg';
import cross from '../images/icon-cross.svg';

const TodoItem = (props) => {
	

	const deleteTodoHandler = () => {
		props.onDeleteTodo(props.id);
	};

	const completeTodoHandler = () => {
		props.onToggleTodo(props.id)
	};

	

	return (
		<React.Fragment>
			<li className={`${classes.todoItem} ${props.toggleDisplay ? classes.todoItemDark : ''}`}>
        <div className={`${classes.check} ${props.complete ? classes.checkComplete : ''}`} onClick={completeTodoHandler}>
					<img src={check} alt='' />
				</div>
				<div className={`${classes.todo} ${props.complete ? classes.todoComplete : ''}`}>{props.todo}</div>
				<div className={classes.cross} onClick={deleteTodoHandler}>
					<img src={cross} alt='' />
				</div>
			</li>
		</React.Fragment>
	);
};

export default TodoItem;
