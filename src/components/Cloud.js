import React, { useEffect, useRef, useState } from 'react';
import cloudImage from '../images/cloud.png';

const Cloud = ({ x, y , opacity}) => {

	const [move,setMove] = useState(0)
	let cloudRef = useRef(null)
	
	useEffect(() => {
		const interval = setInterval(() => {
			setMove((prev) => prev += 1)
			cloudRef.current.style.transform = `translateX(${move}px)`
			
		},500)
		return () => clearInterval(interval)
	})

	return (
		<div className='cloud' ref={cloudRef}>
			<img
				src={cloudImage}
				alt='cloud'
				className='cloud'
				style={{
					left: x,
					top: y,
					opacity: opacity
				}}
			/>
		</div>
	);
};

export default Cloud;
