import React from 'react'

import { newsletterData } from '../../../newsletterData'

import './NewsletterItem.scss'

function NewsletterItem() {
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
					<section className='input-control round'>
						<input className='control-input' type='checkbox' id='checkbox' />
						<label htmlFor='checkbox'></label>
					</section>
				</article>
			))}
		</section>
	)
}

export default NewsletterItem
