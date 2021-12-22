import React from 'react';
import Card from '../UI/Card';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import Footer from './Footer';



const Todos = props => {
	return (
		<Card toggleDisplay={props.display}>
			<ul className={classes.items}>
				{props.todos.map((todo) => {
					return (
						<TodoItem
							key={todo.id}
							id={todo.id}
							todo={todo.todo}
              onDeleteTodo={props.onDeleteTodo}
              toggleDisplay={props.display}
						/>
					);
				})}
      </ul>
      <Footer />
		</Card>
	);
};

export default Todos;
