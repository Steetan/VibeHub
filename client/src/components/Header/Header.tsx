import React from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'

const Header = ({}) => {
	return (
		<header className='header'>
			<Logo />
			<Search />
			<Link to='/auth/login'>
				<span>Войти</span>
			</Link>
		</header>
	)
}

export default Header
