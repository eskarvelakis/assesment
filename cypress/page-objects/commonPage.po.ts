export class CommonPage {
	getPageBody() {
		return cy.get('body')
	}

	getPageHeader() {
		return cy.get('[data-cy="page-header"]')
	}

	checkHeaderTitle(titleName: string) {
		return cy.get('[data-testid="headline"]').contains(titleName)
	}

	checkTable() {
		return cy.get('[data-testid="table"]')
	}

	getButton(buttonText: string) {
		return cy.get('[data-testid="button"]').contains(buttonText, { timeout: 5000 })
	}

	getLabel(labeltext: string) {
		return cy.get('span').contains(labeltext)
	}

	getDropdown() {
		return cy.get('[data-testid="dropdown"]')
	}

	getSearchDropdown(searchId: string) {
		return cy.get(searchId, { includeShadowDom: true })
	}

	selectOption(dropdownOption: string) {
		return cy.get('[data-testid="dropdown-option"] > div').contains(dropdownOption)
	}

	getCheckbox() {
		return cy.get('[data-testid="checkbox"]', { timeout: 10000 })
	}

	getAllCheckbox() {
		return cy.get('[data-cy="allCheckboxes"][data-testid="checkbox"]')
	}

	getNavigationItem() {
		return cy.get('[data-testid="navigation-item"]', { timeout: 10000 })
	}

	getDropdownOption() {
		return cy.get('[data-testid="dropdown-option"]')
	}

	getMultiSelectOption() {
		return cy.get('[data-testid="multiselect-option"]', {
			includeShadowDom: true,
		})
	}

	getFooter() {
		return cy.get('tc-footer')
	}

	getLink(linkName: string) {
		return cy.get('[data-testid="text"]').contains(linkName)
	}

	getTableHeader(labelName: string) {
		return cy.get('[data-cy="column-header"]').contains(labelName)
	}

	filteredOutput(searchOutput: string) {
		return cy
			.get('[data-testid="table"]')
			.wait(100)
			.find('[data-testid="table-cell"]', { timeout: 5000 })
			.filter(':contains("' + searchOutput + '")')
	}

	filteredTag(searchOutput: string) {
		return cy
			.get('[data-testid="table"]')
			.wait(100)
			.find('[data-testid="tag"]', { timeout: 5000 })
			.filter(':contains("' + searchOutput + '")')
	}

	getConfirmDialog() {
		return cy.get('[data-cy="confirm-dialog"]')
	}

	getConfirmMessage() {
		return cy.get('[data-testid="headline"]')
	}

	getConfirmButton(buttontext: string) {
		return cy.get('[data-cy="button-ok"]').contains(buttontext)
	}

	getToastMsg() {
		return cy.get('#toast-container')
	}

	getToastNotification() {
		return cy.get('[data-cy="toast-notification"]')
	}

	getTab(tabText) {
		return cy.get('[data-testid="tabs"]', { timeout: 5000 }).shadow().find(`[data-text="${tabText}"]`)
	}

	getTabContent() {
		return cy.get('[data-testid="tabs"]', { includeShadowDom: true })
	}

	getAccordion(tabName: string) {
		return cy.get('[data-testid="accordion"]', { timeout: 50000 }).contains(tabName)
	}

	getInputField() {
		return cy.get('[data-testid="input"]', { includeShadowDom: true })
	}

	getTCIcon() {
		return cy.get('[data-cy="tc-icon"]')
	}

	getTooltip() {
		return cy.get('[data-cy="tooltip-info"]', {
			timeout: 10000,
		})
	}

	getTooltipContent() {
		return cy.get('[data-cy="tooltip-content"]', { timeout: 2000 })
	}

	getTooltipIcon() {
		return cy.get('[data-cy="info-tooltip-icon"]')
	}

	getTooltipValue(tooltipValue: string) {
		return cy.get('[data-testid="grid-row"][data-cy="' + tooltipValue + '"]')
	}

	getTooltipTag() {
		return cy.get('[data-cy="tooltip-tag"]')
	}

	getNavigationTooltip(navigationtooltip: string) {
		return cy.get('[data-testid="tooltip"][data-cy="' + navigationtooltip + '"]')
	}

	getNumberResults() {
		return cy.get('[data-cy="number-results"]', { timeout: 2000 })
	}
}
