import Navbar from './Components/Navbar';
import Calculator from './Components/Calculator';
import './Styles/App.css';
import Year from './Components/Year';

function App() {
	return (
		// <div className='App'>
		// 	<header className='App-header'>
		// 		<img src={logo} className='App-logo' alt='logo' />
		// 		<p>
		// 			Edit <code>src/App.js</code> and save to reload.
		// 		</p>
		// 		<a
		// 			className='App-link'
		// 			href='https://reactjs.org'
		// 			target='_blank'
		// 			rel='noopener noreferrer'
		// 		>
		// 			Learn React
		// 		</a>
		// 	</header>
		// </div>
		<div>
			<Navbar />
			<Calculator />
			<Year />
		</div>
	);
}

export default App;
