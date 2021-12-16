import './App.css';
import Input from './components/Input';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  return (
		<div className='App'>
			<div className='main'>
				<Header />
        <Input />
        <Todos />
			</div>
		</div>
	);
}

export default App;
