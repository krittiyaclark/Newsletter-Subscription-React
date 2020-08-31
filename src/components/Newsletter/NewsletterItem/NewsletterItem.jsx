import React, { useState } from 'react'

import Checkbox from '../../UI/Checkbox/Checkbox'
import { newsletterData } from '../../../newsletterData'

import './NewsletterItem.scss'
import '../../UI/Checkbox/Checkbox.scss'

function NewsletterItem() {
	const [checkedItems, setCheckedItems] = useState({})

	function handleCheckboxChange(event) {
		const name = event.target.name
		const isChecked = event.target.checked

		// Set an initial state
		setCheckedItems({
			...checkedItems,
			name,
			isChecked,
		})
	}

	return (
		<section className='container card'>
			{newsletterData.map((item) => (
				<article className='newsletter-item' key={item.id}>
					<figure className='image'>
						<img src={item.img} alt='Newsletter List' />
					</figure>
					<section className='info'>
						<h3>{item.title}</h3>
						<p>{item.info}</p>
					</section>
					<section className='input-control'>
						<Checkbox
							className='control-input'
							type='checkbox'
							htmlFor='checkbox'
							name={item.name}
							checked={item.isChecked}
							onChange={handleCheckboxChange}
						/>
					</section>
				</article>
			))}
		</section>
	)
}

export default NewsletterItem
