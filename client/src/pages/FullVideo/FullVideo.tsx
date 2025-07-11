import React from 'react'
import VideoBlock from '../../components/VideoBlock/VideoBlock'
import { useQuery } from '@tanstack/react-query'
import { IVideo } from '../Home'
import RecommendsBlock from '../../components/RecommendsBlock/RecommendsBlock'
import { useVideos } from '../../utils/fetchData'
import { useSearchParams } from 'react-router-dom'

const FullVideo: React.FC = () => {
	return (
		<div className='fullVideo'>
			<VideoBlock />
			<RecommendsBlock />
		</div>
	)
}

export default FullVideo
