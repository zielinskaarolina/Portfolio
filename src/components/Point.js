import React from 'react';
import '../styles/point.css';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Point = ({ name, points, color }) => {
	const pointsRef = useRef(null);

	useEffect(() => {
		const el = pointsRef.current;

		gsap.to(el, {
			opacity: 1,
			y: 0,
			duration: 1,
			scrollTrigger: {
				trigger: el,
				start: 'top 80%',
				markers: true
			},
		});
	});

	const squares = points.map((el) => {
		if (el === 1) {
			return <div style={{ backgroundColor: color }}></div>;
		}
		return <div></div>;
	});

	return (
		<div
			className='point'
			ref={pointsRef}
			style={{ opacity: 0, transform: 'translateY(100px)' }}>
			<h3>{name}</h3>
			<div className='squares-container'>{squares}</div>
		</div>
	);
};

export default Point;
