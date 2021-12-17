import React from 'react';
import Card from '../UI/Card';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';



const Todos = props => {
	return (
		<Card>
			<ul>
				{props.todos.map((todo) => {
					return <TodoItem key={todo.id} id={todo.id} todo={todo.todo} />;
				})}
			</ul>
		</Card>
	);
};

export default Todos;
