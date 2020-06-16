import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import CalculatePage from '../../../support/page-objects/pages/CalculatePage'

Given('I go to the factorial calculator website', () => {
	CalculatePage.visit()
	CalculatePage.validateButtonColor()
})

When('I fill out the field with {int}', number => {
	CalculatePage.fillNumber(number)
})

And('I click on Calculate button', () => {
	CalculatePage.clickOnCalculateButton()
})

And('I change the {string}', device => {
	CalculatePage.changeViewport(device)
})

Then('I see that the result is {string}', factorial => {
	CalculatePage.validateResult(factorial)
})
