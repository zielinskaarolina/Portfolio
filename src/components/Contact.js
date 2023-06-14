import React from 'react';
import '../styles/contact.css';
import mail from '../images/mail.png';
import phone from '../images/phone.png';

import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
	const moneyRef = useRef(null);

	useEffect(() => {
		const el = moneyRef.current;
        gsap.to(el, {
			opacity: 1,
			y: 100,
			duration: 1,
			scrollTrigger: {
				trigger: el,
				start: 'top 80%',
				markers: true
			},
		});
	});
	return (
		<div className='contact'>
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
