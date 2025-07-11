import React from 'react'
import VideoBlock from '../../components/VideoBlock/VideoBlock'
import { useQuery } from '@tanstack/react-query'
import { IVideo } from '../Home'

const FullVideo: React.FC = ({}) => {
	return (
		<div className='fullVideo'>
			<VideoBlock />
		</div>
	)
}

export default FullVideo
