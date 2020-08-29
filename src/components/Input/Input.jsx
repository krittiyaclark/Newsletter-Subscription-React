import React from 'react'

import './Input.scss'

function Input() {
	return (
		<>
			<form id='email'>
				<input
					type='email'
					className='form-control text-capitalize'
					placeholder='Enter email'
				/>
			</form>
			<button type='submit' className='button'>
				subscribe
			</button>
		</>
	)
}

export default Input
