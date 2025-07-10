import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const VideoPrev = ({}) => {
	const navigate = useNavigate()

	const redirectPage = () => {
		navigate('/video')
	}

	return (
		// <Link to='/video'>
		<div className='video-prev' onClick={() => redirectPage()}>
			<img src={require('../../assets/prev.jpg')} alt='' />
			<div className='video-prev__title'>Название видео</div>
		</div>
		// </Link>
	)
}

export default VideoPrev
