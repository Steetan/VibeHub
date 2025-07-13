import React, { useEffect, useState } from 'react'
import { useVideos } from '../utils/fetchData'
import VideoPrev from '../components/VideoPrev/VideoPrev'

export interface IVideo {
	id: string
	link: string
	description?: string
	category: string
	title: string
	preview: string
}

const Home: React.FC = () => {
	const { data, isLoading, error } = useVideos('')
	const [fetchData, setFetchData] = useState<IVideo[]>([])

	// Используем useEffect для обновления состояния fetchData
	useEffect(() => {
		if (Array.isArray(data)) {
			setFetchData(data)
		} else {
			setFetchData([])
		}
	}, [data])

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error loading videos: {error.message}</div>
	}

	return (
		<div className='content__video-prev'>
			{fetchData.map((item: IVideo) => (
				<VideoPrev key={item.id} {...item} />
			))}
		</div>
	)
}

export default Home
