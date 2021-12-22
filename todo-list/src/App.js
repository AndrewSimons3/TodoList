import './App.css';
import Input from './components/Input';
import Header from './components/Header';
import Todos from './components/Todos';
import { useState } from 'react';

function App() {
	const [todos, setTodos] = useState([
		{
			id: 'td1',
			todo: 'Wash the dishes',
		},
		{
			id: 'td2',
			todo: 'Walk the dog',
		},
		{
			id: 'td3',
			todo: 'Workout',
		},
		{
			id: 'td4',
			todo: 'Pay bills',
		},
  ]);
  
  const [toggleDisplay, setToggleDisplay] = useState(false);
  

	

	const addTodoHandler = (enteredText) => {
		setTodos((prevTodos) => {
			const updatedTodos = [...prevTodos];
			updatedTodos.unshift({ todo: enteredText, id: Math.random().toString() });

			return updatedTodos;
		});
	};

	const deleteTodoHandler = (id) => {
		setTodos((prevTodos) => {
			const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
			console.log(updatedTodos);
			return updatedTodos;
		});
  };
  
  const toggleDisplayHandler = () => {
    setToggleDisplay(value => !value);
    console.log('working')
  }


	return (
		<div className='App'>
			<div className='main'>
        <Header display={toggleDisplay} onToggleDisplay={toggleDisplayHandler}/>
				<Input onAddTodo={addTodoHandler} />
				<Todos
					todos={todos}
					onDeleteTodo={deleteTodoHandler}
				/>
			</div>
		</div>
	);
}

export default App;
