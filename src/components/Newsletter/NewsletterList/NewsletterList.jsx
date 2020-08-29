import React from 'react'

import NewsletterItem from '../NewsletterItem/NewsletterItem'

import './NewsletterList.scss'

function NewsletterList() {
	return (
		<section className='newsletter-list'>
			<div id='newsletter-header'>
				<h1 className='newsletter-title'>Newsletters</h1>
				<p className='newsletter-sub-title'>
					Select all the newsletters you’d like to receive
				</p>
			</div>
			<NewsletterItem />
		</section>
	)
}

export default NewsletterList
