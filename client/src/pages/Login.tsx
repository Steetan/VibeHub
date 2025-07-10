import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FormControlLabel, Switch, TextField } from '@mui/material'

export interface FormData {
	name: string
	fname: string
	oname: string
	email: string
	phone: number
	address: string
	password: string
	confirmPassword: string
	url?: string
	dark_theme?: boolean | null | string
}

const Login = ({}) => {
	const [isChecked, setIsChecked] = React.useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ mode: 'onChange' })

	return (
		<div className='form-block-wrapper'>
			<div className='form-block'>
				<h3 className='form-block__title'>Вход</h3>
				<form>
					<div className='form-block__inputs'>
						<TextField
							error={errors.email && true}
							id='outlined-basic'
							label='Логин'
							variant='outlined'
							{...register('email', { required: 'Укажите почту' })}
						/>
						{errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
						<TextField
							error={errors.password && true}
							id='outlined-basic'
							label='Пароль'
							type={isChecked ? 'text' : 'password'}
							variant='outlined'
							{...register('password', { required: 'Укажите пароль' })}
						/>
						{errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
						<FormControlLabel
							value={isChecked}
							onChange={() => setIsChecked(!isChecked)}
							control={<Switch />}
							label='Показать пароль'
						/>
					</div>
					<div className='form-block__btns-login'>
						<button type='submit' className='button button-login button--footer'>
							Войти
						</button>
						<p>
							Нет аккаунта?
							<Link to='/auth/reg' className='button-link-reg'>
								{' '}
								Зарегистрироваться
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
