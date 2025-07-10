import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import './scss/app.scss'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import NotFound from './pages/NotFound/NotFound'
import FullVideo from './pages/FullVideo/FullVideo'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='' element={<Home />} />
				<Route path='video' element={<FullVideo />} />
				<Route path='auth/login' element={<Login />} />
				<Route path='auth/reg' element={<Registration />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export default App
