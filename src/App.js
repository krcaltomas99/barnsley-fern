import React, { useRef, useEffect } from 'react';
import './App.css';

const ITERATIONS = 100000;

function nextPoint(x, y) {
	const r = Math.random();
	if (r < 0.01) {
		return [0, 0.16 * y];
	} else if (r < 0.86) {
		return [0.85 * x + 0.04 * y, -0.04 * x + 0.85 * y + 1.6];
	} else if (r < 0.93) {
		return [0.2 * x - 0.26 * y, 0.23 * x + 0.22 * y + 1.6];
	} else {
		return [-0.15 * x + 0.28 * y, 0.26 * x + 0.24 * y + 0.44];
	}
}

function App() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		const { width, height } = canvas;

		ctx.fillStyle = '#dcdcdc';
		ctx.fillRect(0, 0, width, height);
		ctx.fillStyle = '#1a6b1a';

		let x = 0;
		let y = 0;

		for (let i = 0; i < ITERATIONS; i++) {
			[x, y] = nextPoint(x, y);
			const px = Math.round((x + 3) * (width / 6));
			const py = Math.round(height - y * (height / 11));
			ctx.fillRect(px, py, 1, 1);
		}
	}, []);

	return (
		<div className="App">
			<canvas ref={canvasRef} width={900} height={700} />
		</div>
	);
}

export default App;
