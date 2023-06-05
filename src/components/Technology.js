import React from 'react';
import '../styles/technology.css';

import Point from './Point';

import technologies from '../images/technology.png';

import data from '../data/technologyPoints';

const Technology = () => {


	const points = data.map((el) => {
		return <Point key={el.name} name={el.name} points={el.point} color={el.color} />;
	});



	return (
		<div className='technology'>
			<h1 className='section-h1'>Technologie</h1>
			<div className='technologies'>
				<div className='left-side'>
					<img src={technologies} alt='' />
				</div>
				<div className='right-side'>{points}</div>
			</div>
		</div>
	);
};

export default Technology;
