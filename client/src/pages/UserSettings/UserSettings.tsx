import React from 'react'
import { customAxios } from '../../utils/axios'
import { RootState, useAppDispatch } from '../../redux/store'
import { setData, setIsAuth } from '../../redux/slices/authSlice'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const UserSettings: React.FC = ({}) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const { isAuth } = useSelector((state: RootState) => state.authSlice)

	!isAuth && navigate('/')

	const onDelete = () => {
		if (window.confirm('Вы действительно хотите удалить аккаунт?')) {
			try {
				customAxios(`/user?token=${Cookies.get('token')}`, 'delete').then((data) => {
					Cookies.remove('token')
					dispatch(setData({}))
					dispatch(setIsAuth(false))
					navigate('/')
				})
			} catch (error) {
				console.error('Ошибка при попытке авторизации', error)
			}
		}
	}
	return (
		<div onClick={onDelete} style={{ cursor: 'pointer' }}>
			Удалить аккаунт
		</div>
	)
}

export default UserSettings
