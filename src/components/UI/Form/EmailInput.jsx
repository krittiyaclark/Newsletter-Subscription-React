import React from 'react'

function EmailInput({ value, changeHandler, ...props }) {
	return (
		<>
			<input
				aria-describedby='emailAddress'
				placeholder='Enter email'
				type='email'
				name='email'
				value={value}
				onChange={changeHandler}
				{...props}
			/>
		</>
	)
}

export default EmailInput
