import React from 'react'
import { Outlet } from 'react-router-dom'
// import Aside from '../components/Aside/Aside'
import Header from '../components/Header/Header'

const Layout = () => {
	return (
		<div className='main'>
			{/* <Aside /> */}
			<div className='wrapper'>
				<Header />
				<div className='content'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default Layout
