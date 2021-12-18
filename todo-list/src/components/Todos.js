import React from 'react';
import Card from '../UI/Card';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';



const Todos = props => {
	return (
		<Card>
			<ul className={classes.items}>
				{props.todos.map((todo) => {
					return (
						<TodoItem
							key={todo.id}
							id={todo.id}
							todo={todo.todo}
							onDeleteTodo={props.onDeleteTodo}
						/>
					);
				})}
			</ul>
		</Card>
	);
};

export default Todos;
