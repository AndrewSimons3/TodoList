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
  
  const addTodoHandler = enteredText => {
    setTodos(prevTodos => {
      const updatedTodos = [...prevTodos];
      updatedTodos.unshift({ todo: enteredText, id: Math.random().toString() });
      return updatedTodos;
    });
  };

	return (
		<div className='App'>
			<div className='main'>
				<Header />
				<Input onAddTodo={addTodoHandler} />
				<Todos todos={todos} />
			</div>
		</div>
	);
}

export default App;
