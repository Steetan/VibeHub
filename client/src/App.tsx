import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import './scss/app.scss'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import NotFound from './pages/NotFound/NotFound'
import FullVideo from './pages/FullVideo/FullVideo'
import Quest from './pages/Quest/Quest'
import AddVideo from './pages/AddVideo/AddVideo'
import UserSettings from './pages/UserSettings/UserSettings'
import MyVideo from './pages/MyVideo/MyVideo'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='' element={<Home />} />
				<Route path='quest' element={<Quest />} />
				<Route path='video' element={<FullVideo />} />
				<Route path='addvideo' element={<AddVideo />} />
				<Route path='auth/login' element={<Login />} />
				<Route path='auth/reg' element={<Registration />} />
				<Route path='userset' element={<UserSettings />} />
				<Route path='myvideo' element={<MyVideo />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export default App
