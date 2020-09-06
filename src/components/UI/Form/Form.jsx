import React, { useEffect, useState } from 'react'

import EmailInput from './EmailInput'
import SubmitButton from './SubmitButton'
import validateForm from './helpers/validateForm'

import './Form.scss'

// Delay execution by given time in milliseconds.
const wait = (ms) => new Promise((r) => setTimeout(r, ms))

function Form() {
	const [email, setEmail] = useState('')
	const [emailClass, setEmailClass] = useState('')
	const [inProgress, toggleInProgress] = useState(false)
	const [errorMessage, setErrorMessage] = useState(null)
	const [successMessage, setSuccessMessage] = useState(null)

	// To reset state after form submission.
	const postSubmissionReset = async () => {
		setEmail('')
		setErrorMessage('')
		toggleInProgress(false)

		// Remove a message
		await wait(2000)
		await setSuccessMessage('')
	}

	// To reset state when form values are invalid.
	const invalidFormReset = async () => {
		toggleInProgress(false)
		setSuccessMessage(null)
		setErrorMessage('Invalid Email!')
		setEmail('')

		// Remove a message
		await wait(2000)
		await setErrorMessage('')
	}

	// Handles form submission process.
	const handleSubmit = async (e) => {
		e.preventDefault()
		toggleInProgress(true)

		// Validates & manipulates state accordingly.
		const processSubmission = () => {
			if (!validateForm(email)) {
				invalidFormReset()
				return
			}

			setSuccessMessage('Form submitted successfully!')
			postSubmissionReset()
		}

		// Wait for 2 seconds before setting a post submission message.
		await wait(2000)
		await processSubmission()
	}

	// Event handler to respond to real time email input changes.
	const emailChangeHandler = (e) => {
		const email = e.target.value
		setEmail(email)

		if (!validateForm(email)) {
			setEmailClass('input-error')
		} else {
			setEmailClass('')
		}
	}

	useEffect(() => {
		// To reset classNames when email is not entered
		// or being removed after typing.
		const message = async () => {
			if (!email.length) {
				setEmailClass('')
			}
			// Remove a message
			await wait(2000)
			await setSuccessMessage('')
		}

		message()
	}, [email])

	return (
		<form onSubmit={handleSubmit} noValidate className='form-control'>
			<EmailInput
				value={email}
				changeHandler={emailChangeHandler}
				className={emailClass}
			/>

			<SubmitButton
				disabled={!Boolean(email) || inProgress}
				text={inProgress ? 'Submitting' : 'Submit'}
			/>

			{errorMessage && <p className='error'>{errorMessage}</p>}
			{successMessage && <p className='success'>{successMessage}</p>}
		</form>
	)
}

export default Form
