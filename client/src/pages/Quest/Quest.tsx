import React from 'react'
import { IVideo } from '../Home'
import VideoPrev from '../../components/VideoPrev/VideoPrev'
import { customAxios } from '../../utils/axios'
import { useSearchParams } from 'react-router-dom'

const Quest: React.FC = ({}) => {
	const [fetchDataSearch, setFetchDataSearch] = React.useState([])
	const [searchParams, setSearchParams] = useSearchParams()
	const searchTerm = searchParams.get('search')
	React.useEffect(() => {
		const fetchData = async () => {
			await customAxios(`/quest?search=${searchTerm}`, 'get').then((fetData) => {
				setFetchDataSearch(fetData)
				console.log(fetData)
			})
		}
		fetchData()
	}, [])

	return (
		<div>
			{fetchDataSearch.map((item: IVideo) => (
				<VideoPrev key={item.id} {...item} />
			))}
		</div>
	)
}

export default Quest
