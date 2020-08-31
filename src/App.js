import React from 'react'
import './App.scss'

import NewsletterList from './components/Newsletter/NewsletterList/NewsletterList'
import Form from './components/UI/Form/Form'

function App() {
	return (
		<main className='newsletter-container'>
			<div className='flex-container wrapper'>
				<NewsletterList />
				<section className='newsletter-subscribe'>
					<Form />
				</section>
			</div>
		</main>
	)
}

export default App
