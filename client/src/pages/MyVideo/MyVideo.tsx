import React from 'react'
import { IVideo } from '../Home'
import VideoPrev from '../../components/VideoPrev/VideoPrev'
import { customAxios } from '../../utils/axios'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Link } from 'react-router-dom'

const MyVideo: React.FC = ({}) => {
	const [fetchDataSearch, setFetchDataSearch] = React.useState([])
	const navigate = useNavigate()
	const location = useLocation()
	const { isAuth } = useSelector((state: RootState) => state.authSlice)

	const fetchData = async () => {
		await customAxios(`/video/user?token=${Cookies.get('token')}`, 'get').then((fetData) => {
			setFetchDataSearch(fetData)
		})
	}
	React.useEffect(() => {
		isAuth ? fetchData() : navigate('/')
	}, [])

	const onDeleteVideo = (id: string) => {
		if (window.confirm('Вы действительно хотите удалить аккаунт?')) {
			try {
				customAxios(`/video/user?token=${Cookies.get('token')}&id=${id}`, 'delete').then((data) => {
					setFetchDataSearch(data)
				})
			} catch (error) {
				console.error('Ошибка при попытке авторизации', error)
			}
		}
	}

	return (
		<div>
			<h1>Ваши видео</h1>
			{fetchDataSearch.length ? (
				<div className='user-video'>
					{fetchDataSearch.map((item: IVideo) => (
						<div>
							<VideoPrev key={item.id} {...item} />
							{location.pathname === '/myvideo' ? (
								<h4 onClick={() => onDeleteVideo(item.id)} style={{ cursor: 'pointer' }}>
									Удалить видео
								</h4>
							) : (
								''
							)}
						</div>
					))}
				</div>
			) : (
				<div>
					<p>Ничего не найдено</p>
					<Link to='/addvideo'>Загрузить видео</Link>
				</div>
			)}
		</div>
	)
}

export default MyVideo
