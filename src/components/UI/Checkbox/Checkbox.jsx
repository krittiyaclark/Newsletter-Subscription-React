import React, { useState } from 'react'

function Checkbox({
	type = 'checkbox',
	name,
	checked = false,
	onChange,
	...props
}) {
	const [isChecked, toggleIsChecked] = useState(checked)

	const handleCheckChange = (e) => {
		onChange(e)
		toggleIsChecked(!isChecked)
	}
	return (
		<label>
			<input
				type={type}
				name={name}
				checked={isChecked}
				onChange={handleCheckChange}
				{...props}
			/>
			<span className='check'></span>
		</label>
	)
}

export default Checkbox
