import React from 'react';
import classes from './Input.module.css';
import { useState } from 'react';

const Input = props => {

  const [enteredValue, setEnteredValue] = useState('');

  const todoInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddTodo(enteredValue);
    event.target.reset();
   
  }

	return (
		<div className={classes['input-container']}>
			<form onSubmit={formSubmitHandler}>
				<input
					className={`${classes.input} ${props.display ? classes.inputDark : ''}`}
					type='text'
					id='todo'
					placeholder='Create a new todo...'
					onChange={todoInputChangeHandler}
				/>
			</form>
		</div>
	);
};

export default Input;
