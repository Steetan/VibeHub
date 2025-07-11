import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
// import Aside from '../components/Aside/Aside'
import Header from '../components/Header/Header'

const Layout = () => {
	const location = useLocation()

	console.log(location.pathname)
	return (
		<div className='main'>
			{/* <Aside /> */}
			<div className='wrapper'>
				<Header />
				<div className={location.pathname === '/quest' ? 'content content--quest' : 'content'}>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Layout
