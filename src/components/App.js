import '../styles/App.css';

import Main from './Main';
import AboutMe from './AboutMe';
import Technology from './Technology';
import Projects from './Projects';
import Contact from './Contact';

function App() {
	return (
		<div className='app'>
			<Main />
			<AboutMe />
			<Technology />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
