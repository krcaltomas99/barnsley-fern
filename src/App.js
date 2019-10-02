import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
	const [dots, setDots] = useState([]);

	console.log(Array.isArray(dots));

	useEffect(() => {
		const canvas = document.getElementById('fern');
		let halfWidth = canvas.offsetWidth / 2;

		let y = 0;
		let x = 0;

		setInterval(() => {
			let nextX = 0.85 * x + 0.04 * y;
			let nextY = -0.04 * x + 0.85 * y + 1.6;

			x = nextX;
			y = nextY;
			const arr = {x, y};
			setDots([...dots, arr]);
		}, 1000);

	}, []);

	return (
		<div id='fern' className="App">
			{dots.map((item) => <div style={}></div>)}
		</div>
	);
}

export default App;
