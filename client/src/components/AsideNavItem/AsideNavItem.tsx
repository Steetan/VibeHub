import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/store'

const AsideNavItem: React.FC = ({}) => {
	const { isAuth } = useSelector((state: RootState) => state.authSlice)

	return isAuth ? <Link to='/addvideo'>Загрузить видео</Link> : <span></span>
}

export default AsideNavItem
