import React from 'react'
import { IVideo } from '../Home'
import VideoPrev from '../../components/VideoPrev/VideoPrev'
import { customAxios } from '../../utils/axios'
import { useSearchParams } from 'react-router-dom'
import Cookies from 'js-cookie'

const UserVideo: React.FC = ({}) => {
	const [fetchDataSearch, setFetchDataSearch] = React.useState([])
	React.useEffect(() => {
		const fetchData = async () => {
			await customAxios(`/video/user?token=${Cookies.get('token')}`, 'get').then((fetData) => {
				setFetchDataSearch(fetData)
				console.log(fetData)
			})
		}
		fetchData()
	}, [])

	return (
		<div>
			<h1>Ваши видео</h1>
			{fetchDataSearch.length ? (
				fetchDataSearch.map((item: IVideo) => <VideoPrev key={item.id} {...item} />)
			) : (
				<p>Ничего не найдено</p>
			)}
		</div>
	)
}

export default UserVideo
