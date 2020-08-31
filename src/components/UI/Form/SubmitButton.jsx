import React from 'react'

function SubmitButton({ disabled, text, ...props }) {
	return (
		<>
			<button type='submit' disabled={disabled} {...props}>
				{text}
			</button>
			<section className='input-checkbox'>
				<input
					type='checkbox'
					id='receive-news'
					htmlFor='email'
					name='scales'
					required
					autoFocus
					aria-label='click'
				/>
				<label htmlFor='receive-news'>
					I do not want to receive information about future newsletters.
				</label>
			</section>
		</>
	)
}

export default SubmitButton
