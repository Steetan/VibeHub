import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'

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

const Registration = ({}) => {
	const inputFileRef = React.useRef<HTMLInputElement>(null)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>()

	return (
		<div className='form-block-wrapper'>
			<div className='form-block'>
				<h3 className='form-block__title'>Регистрация</h3>
				<form>
					<div className='form-block__inputs'>
						<TextField
							error={errors.password && true}
							id='outlined-basic'
							label='Фамилия'
							className='form-block__input'
							variant='outlined'
							{...register('fname', { required: 'Укажите фамилию' })}
						/>
						{errors.fname && <p style={{ color: 'red' }}>{errors.fname.message}</p>}
						<TextField
							error={errors.password && true}
							id='outlined-basic'
							className='form-block__input'
							label='Имя'
							variant='outlined'
							{...register('name', { required: 'Укажите имя' })}
						/>
						{errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
						<TextField
							error={errors.password && true}
							id='outlined-basic'
							label='Отчество'
							className='form-block__input'
							variant='outlined'
							{...register('oname', { required: 'Укажите отчество' })}
						/>
						{errors.oname && <p style={{ color: 'red' }}>{errors.oname.message}</p>}
						<TextField
							error={errors.password && true}
							id='outlined-basic'
							label='Email'
							type='email'
							className='form-block__input'
							variant='outlined'
							{...register('email', { required: 'Укажите почту' })}
						/>
						{errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
						<TextField
							error={errors.password && true}
							id='outlined-basic'
							label='Номер телефона'
							type='number'
							className='form-block__input'
							variant='outlined'
							{...register('phone', { required: 'Укажите номер телефона' })}
						/>
						{errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
						<TextField
							error={errors.password && true}
							id='outlined-basic'
							label='Адрес'
							className='form-block__input'
							variant='outlined'
							{...register('address', { required: 'Укажите свой адрес' })}
						/>
						{errors.address && <p style={{ color: 'red' }}>{errors.address.message}</p>}
						<TextField
							error={errors.password && true}
							id='outlined-basic'
							label='Пароль'
							className='form-block__input'
							variant='outlined'
							type='password'
							{...register('password', { required: 'Укажите пароль' })}
						/>
						{errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
						{/* {!userImgUrl && (
							<label htmlFor='file-upload' className='custom-file-upload'>
								Загрузить фото
							</label>
						)}
						<input
							id='file-upload'
							ref={inputFileRef}
							type='file'
							style={{ display: 'none' }}
							onChange={handleFileChange}
						/>

						{userImgUrl && (
							<button className='settings__btn-delete' onClick={deleteImg}>
								Удалить изображение
							</button>
						)}
						<img
							className='form-block__img-upload'
							src={`${process.env.REACT_APP_SERVER_URL}/uploads/userIcons/${userImgUrl}`}
							alt=''
						/> */}
					</div>
					<div className='form-block__btns'>
						<button type='submit' className='button button--footer'>
							Зарегистрироваться
						</button>
						<p>
							Есть аккаунт?
							<Link to='/auth/login' className='button-link-reg'>
								{' '}
								Войти
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Registration
