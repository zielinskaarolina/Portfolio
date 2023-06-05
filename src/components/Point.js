import React from 'react';
import '../styles/point.css';

const Point = ({ name, points, color }) => {
	
	const squares = points.map((el) => {
		if (el === 1) {
			return <div style={{backgroundColor: color}}></div>;
		}
		return <div></div>;
	});

	return (
		<div className='point'>
			<h3>{name}</h3>
			<div className='squares-container'>{squares}</div>
		</div>
	);
};

export default Point;
