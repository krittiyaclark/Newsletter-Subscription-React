import React from 'react'
import './App.scss'

import NewsletterList from './components/Newsletter/NewsletterList/NewsletterList'
import Input from './components/Input/Input'

function App() {
	return (
		<main className='newsletter-container'>
			<div className='flex-container wrapper'>
				<NewsletterList />
				<section className='newsletter-subscribe'>
					<Input />
					<section className='input-checkbox'>
						<input
							type='checkbox'
							id='receive-news'
							name='scales'
							required
							autoFocus
						/>
						<label htmlFor='receive-news'>
							I do not want to receive information about future newsletters.
						</label>
					</section>
				</section>
			</div>
		</main>
	)
}

export default App
