import React, { useState } from 'react';
import classes from './TodoItem.module.css';
import check from '../images/icon-check.svg';
import cross from '../images/icon-cross.svg';

const TodoItem = (props) => {
	const [isComplete, setIsComplete] = useState(false);

	const deleteTodoHandler = () => {
		props.onDeleteTodo(props.id);
	};

	const toggleTodoHandler = () => {
		setIsComplete(value => !value);
	};


	return (
		<React.Fragment>
			<li className={classes.todoItem}>
        <div className={`${classes.check} ${isComplete ? classes.checkComplete : ''}`} onClick={toggleTodoHandler}>
					<img src={check} alt='' />
				</div>
				<div className={`${classes.todo} ${isComplete ? classes.todoComplete : ''}`}>{props.todo}</div>
				<div className={classes.cross} onClick={deleteTodoHandler}>
					<img src={cross} alt='' />
				</div>
			</li>
		</React.Fragment>
	);
};

export default TodoItem;
