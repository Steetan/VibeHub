import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import { customAxios } from '../../utils/axios'
import Cookies from 'js-cookie'
import axios from 'axios'
import { RootState, useAppDispatch } from '../../redux/store'
import { setData, setIsAuth } from '../../redux/slices/authSlice'
import { useSelector } from 'react-redux'
import PopupMenu from '../PopupMenu/PopupMenu'

const Header = ({}) => {
	const [isVisiblePopup, setIsVisiblePopup] = React.useState(false)

	const dispatch = useAppDispatch()

	const { isAuth } = useSelector((state: RootState) => state.authSlice)

	React.useEffect(() => {
		try {
			Cookies.get('token') &&
				customAxios(`/meinfo?token=${Cookies.get('token')}`, 'get').then((data) => {
					dispatch(setData({ ...data }))
					dispatch(setIsAuth(true))
				})
		} catch (error) {
			console.error('Ошибка при регистрации', error)
		}
	}, [])

	return (
		<header className='header'>
			<Logo />
			<Search />
			<Link to='/auth/login'>{!isAuth && <span>Войти</span>}</Link>
			<PopupMenu setIsVisiblePopup={setIsVisiblePopup} />
		</header>
	)
}

export default Header
