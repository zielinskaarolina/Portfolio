import React from 'react';
import { BiSlideshow } from 'react-icons/bi';

const Project = ({ img, name, desc, url }) => {
	return (
		<div className='project'>
			<div className='project-img'>
				<img src={`${process.env.PUBLIC_URL}/images/${img}`} alt='' />
				<a href={url}>
					<div className='circle-show-project'>
						<BiSlideshow style={{ color: 'white' }} />
					</div>
				</a>
			</div>
			<h3>{name}</h3>
			<p>{desc}</p>
		</div>
	);
};

export default Project;
