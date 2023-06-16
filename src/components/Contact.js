import React, { useState } from 'react';
import '../styles/contact.css';
import mail from '../images/mail.png';
import phone from '../images/phone.png';
import Cloud from './Cloud';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
	const [clouds, setClouds] = useState([]);
	const moneyRef = useRef(null);

	useEffect(() => {
		const money = moneyRef.current;

		gsap.to(money, {
			opacity: 1,
			y: 100,
			duration: 1,
			scrollTrigger: {
				trigger: money,
				start: 'top 80%'
			},
		});
	});

	const generateRandomClouds = (number) => {
		for (let i = 0; i < number; i++) {
			let positionX = Math.floor(Math.random() * window.innerWidth - 400);
			let positionY = Math.floor(Math.random() * window.innerHeight);
			let opacity = Math.random() * 1;
			clouds.push(<Cloud x={positionX} y={positionY} opacity={opacity} />);
		}

		return <>{clouds}</>;
	};
	return (
		<div className='contact'>
			{generateRandomClouds(8)}
			<h1 className='section-h1'>Kontakt</h1>
			<div className='animation'>
				<p className='text'>Daj mi wejsc do gry jako front-end developer</p>
				<div className='monets-container' ref={moneyRef} style={{ opacity: 0 }}>
					<img src={mail} alt='' />
					<img src={phone} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Contact;
