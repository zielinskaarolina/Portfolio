import React from 'react';
import '../styles/main.css';
import portret from '../images/character.png';
import {AiOutlineArrowDown} from 'react-icons/ai'

const Main = () => {
	return (
		<div className='main '>
			<img src={portret} alt="" />
			<h1>Karolina Zielińska</h1>
			<p>
				Studentka informatyki nastawiona na zdobywanie doświadczenia zawodowego
				jako front-end developer.
			</p>
            <AiOutlineArrowDown style={{
                position: 'absolute',
                bottom: '20',
                fontSize: '40'
            }}/>
		</div>
	);
};

export default Main;
