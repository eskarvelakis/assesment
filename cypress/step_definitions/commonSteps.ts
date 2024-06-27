import { After, Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

import { CommonPage } from '../page-objects/commonPage.po'
import { LoginPage } from '../page-objects/loginPage.po'

let login: LoginPage
let common: CommonPage

beforeEach(() => {
	login = new LoginPage()
	common = new CommonPage()
	cy.clearLocalStorage()
})

Given('user opens login page', () => {
	login.navigateTo()
	login.getTitleText('Test login')
})

Then('user is on {string} page', (pagetitle: string) => {
	cy.title().should('contain', pagetitle)
})

When('user fills username: {string} and password: {string}', (username: string, password: string) => {
	login.fillUsername(username)
	login.fillPassword(password)
	login.submit().click()
})

After(() => {
	cy.clearCookies()
})
