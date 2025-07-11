import React from 'react'
import { useNavigate } from 'react-router-dom'

const VideoPrev: React.FC<{ id: string; preview: string; title: string }> = ({
	id,
	preview,
	title,
}) => {
	const navigate = useNavigate()

	const redirectPage = async () => {
		navigate(`/video?look=${id}`)
	}

	return (
		<div className='video-prev' onClick={() => redirectPage()}>
			<img src={`${process.env.REACT_APP_SERVER_URL}/uploads/previews/${preview}`} />
			<div className='video-prev__title'>{title}</div>
		</div>
	)
}

export default VideoPrev
