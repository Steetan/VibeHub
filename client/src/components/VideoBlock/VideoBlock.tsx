import React from 'react'
import { IVideo } from '../../pages/Home'
import { useSearchParams } from 'react-router-dom'
import { useVideos } from '../../utils/fetchData'

interface IVideoLink {
	id: string
	link: string
}

const VideoBlock: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const searchTerm = searchParams.get('look')
	const { data, isLoading, error } = useVideos(`/video?look=${searchTerm}`)

	console.log(data?.link)

	return (
		<div className='video-block'>
			<video
				src={`${process.env.REACT_APP_SERVER_URL}/uploads/videos/${data?.link}`}
				controls
			></video>
			<h3 className='video-block__title'>{data?.title}</h3>
		</div>
	)
}

export default VideoBlock
