const NUMBER = '#number'
const CALCULATE_BUTTON = '#getFactorial'
const RESULT = '#resultDiv'

class CalculatePage {
	static visit() {
		cy.visit('/')
		cy.url().should('include', 'qainterview')
	}

	static changeViewport(device) {
		cy.viewport(device)
	}

	static fillNumber(number) {
		cy.get(NUMBER).clear().type(number)
	}

	static clickOnCalculateButton() {
		cy.get(CALCULATE_BUTTON).click()
	}

	static validateResult(factorial) {
		cy.get(RESULT).should('contain', factorial)
	}

	static validateButtonColor() {
		cy.get(CALCULATE_BUTTON).should(
			'have.css',
			'background-color',
			'rgb(92, 184, 92)'
		)
	}
}

export default CalculatePage
