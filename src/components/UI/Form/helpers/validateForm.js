function validateForm(email) {
	const emailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)

	if (!emailValid) {
		return false
	}

	return true
}

export default validateForm
