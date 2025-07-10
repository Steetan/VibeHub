import React from 'react'

const VideoBlock: React.FC = ({}) => {
	return (
		<div className='video-block'>
			<video src={require('../../assets/testVideo.mp4')} controls></video>
			<h3 className='video-block__title'>Видео</h3>
		</div>
	)
}

export default VideoBlock
