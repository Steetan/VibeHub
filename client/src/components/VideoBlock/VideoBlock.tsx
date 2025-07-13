import React from 'react'
import { IVideo } from '../../pages/Home'
import { useSearchParams } from 'react-router-dom'
import { useVideos } from '../../utils/fetchData'
import { customAxios } from '../../utils/axios'

const VideoBlock: React.FC<any> = ({ video }) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const searchTerm = searchParams.get('look')
	const [fetchCurrentVideo, setFetchCurrentVideo] = React.useState<any>(null)

	React.useEffect(() => {
		const fetchData = async () => {
			customAxios(`/video?look=${searchTerm}`, 'get').then((fetData) => {
				setFetchCurrentVideo(fetData)
			})
		}
		fetchData()
	}, [])

	return (
		<div className='video-block'>
			<video
				src={`${process.env.REACT_APP_SERVER_URL}/uploads/videos/${fetchCurrentVideo?.link}`}
				controls
			></video>
			<h3 className='video-block__title'>{fetchCurrentVideo?.title}</h3>
			<h4 className='video-block__title'>Автор: {fetchCurrentVideo?.name}</h4>
			<p className='video-block__title'>
				<b>Описание:</b> <br />
				<br />
				{fetchCurrentVideo?.description}
			</p>
		</div>
	)
}

export default VideoBlock
