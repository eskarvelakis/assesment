export class CommonPage {
  getPageBody() {
    return cy.get("body");
  }

  getPageHeader() {
    return cy.get('[data-cy="page-header"]');
  }

  checkHeaderTitle(titlename: string) {
    return cy.get('[data-testid="headline"]').contains(titlename);
  }

  getVersionNumber() {
    return cy.get('[data-cy="tc-version"]');
  }

  getSidePanel() {
    return cy.get('[data-cy="sidepanel"]', { timeout: 5000 });
  }

  getExtendedSidepanel() {
    return cy.get('[data-cy="sidepanel-extension"]');
  }

  getSidepanelContent() {
    return cy.get('[data-cy="sidepanel-content"]', { timeout: 2000 });
  }

  getSidepanelHeader() {
    return cy.get('[data-cy="sidepanel-header"]');
  }

  getPanelTitle() {
    return cy.get('[data-cy="sidepanel-extension-header"]', {
      timeout: 3000,
      includeShadowDom: true,
    });
  }

  accountName(accountname: string) {
    return cy.get('[data-cy="username"]').contains(accountname);
  }

  roleName(rolename: string) {
    return cy.get('[data-cy="userrole"]').contains(rolename);
  }

  getPageTitle() {
    return cy.get("h1", { timeout: 20000 });
  }

  checkTable() {
    return cy.get('[data-testid="table"]');
  }

  getButton(buttontext: string) {
    return cy
      .get('[data-testid="button"]')
      .contains(buttontext, { timeout: 5000 });
  }

  getCancelBtn() {
    return cy.get('[data-cy="button-cancel"]');
  }

  getGroupBtn() {
    return cy.get('[data-cy="group-button"]', { timeout: 1000 });
  }

  getSubmitBtn() {
    return cy.get('[data-testid="submit-button"]');
  }

  getLabel(labeltext: string) {
    return cy.get("span").contains(labeltext);
  }

  getDropdown() {
    return cy.get('[data-testid="dropdown"]');
  }

  getSearchDropdown(searchid: string) {
    return cy.get(searchid, { includeShadowDom: true });
  }

  selectOption(dropdownoption: string) {
    return cy
      .get('[data-testid="dropdown-option"] > div')
      .contains(dropdownoption);
  }

  getCheckbox() {
    return cy.get('[data-testid="checkbox"]', { timeout: 10000 });
  }

  getAllCheckbox() {
    return cy.get('[data-cy="allCheckboxes"][data-testid="checkbox"]');
  }

  getNavigationItem() {
    return cy.get('[data-testid="navigation-item"]', { timeout: 10000 });
  }

  getDropdownOption() {
    return cy.get('[data-testid="dropdown-option"]');
  }

  getMultiSelectOption() {
    return cy.get('[data-testid="multiselect-option"]', {
      includeShadowDom: true,
    });
  }

  getFooter() {
    return cy.get("tc-footer");
  }

  getLink(linkname: string) {
    return cy.get('[data-testid="text"]').contains(linkname);
  }

  getTableHeader(labelname: string) {
    return cy.get('[data-cy="column-header"]').contains(labelname);
  }

  inputSearchItem(searchid: string) {
    return cy.get(searchid);
  }

  filteredOutput(searchoutput: string) {
    return cy
      .get('[data-testid="table"]')
      .wait(100)
      .find('[data-testid="table-cell"]', { timeout: 5000 })
      .filter(':contains("' + searchoutput + '")');
  }

  filteredTag(searchoutput: string) {
    return cy
      .get('[data-testid="table"]')
      .wait(100)
      .find('[data-testid="tag"]', { timeout: 5000 })
      .filter(':contains("' + searchoutput + '")');
  }

  getLanguage() {
    return cy.get("#langButton", { timeout: 20000 });
  }

  chooseLanguage(chosenlang: string) {
    return cy.get("div").contains(chosenlang);
  }

  getResetBtn() {
    return cy.get('[data-cy="reset-button"]');
  }

  getResetTooltip() {
    return cy.get('[data-cy="reset-tooltip"]');
  }

  getPaginationType(usecase) {
    return cy.get('[data-cy="group-pagination"]').shadow().find(usecase);
  }

  getPaginationText() {
    return cy.get('[data-cy="entries-counter"]');
  }

  getPaginationElements() {
    return cy.get('[data-cy="paginate-elements"]');
  }

  getPaginationInput() {
    return cy.get('[data-cy="paginate-input"]');
  }

  getSpinner() {
    return cy.get('[data-cy="loading-spinner"]');
  }

  getCloseBtn() {
    return cy.get('[data-cy="close-icon"]');
  }

  getConfirmDialog() {
    return cy.get('[data-cy="confirm-dialog"]');
  }

  getConfirmMessage() {
    return cy.get('[data-testid="headline"]');
  }

  getConfirmButton(buttontext: string) {
    return cy.get('[data-cy="button-ok"]').contains(buttontext);
  }

  getToastMsg() {
    return cy.get("#toast-container");
  }

  getToastNotification() {
    return cy.get('[data-cy="toast-notification"]');
  }

  getThreeDotsBtn() {
    return cy.get('[data-cy="account-state-action-dropdown-menu"]', {
      timeout: 2000,
    });
  }

  getTab(tabtext) {
    return cy
      .get('[data-testid="tabs"]', { timeout: 5000 })
      .shadow()
      .find(`[data-text="${tabtext}"]`);
  }

  getTabContent() {
    return cy.get('[data-testid="tabs"]', { includeShadowDom: true });
  }

  getAccordion(tabname: string) {
    return cy
      .get('[data-testid="accordion"]', { timeout: 50000 })
      .contains(tabname);
  }

  getNotification() {
    return cy.get('[data-testid="notification"]', { includeShadowDom: true });
  }

  getIcon() {
    return cy.get('[data-cy="selection-icon"]', { includeShadowDom: true });
  }

  getConfidentiality() {
    return cy.get('[data-cy="confidentiality-notice"]');
  }

  getInputField() {
    return cy.get('[data-testid="input"]', { includeShadowDom: true });
  }

  getTCIcon() {
    return cy.get('[data-cy="tc-icon"]');
  }

  getTooltip() {
    return cy.get('[data-cy="tooltip-info"]', {
      timeout: 10000,
    });
  }

  getTooltipContent() {
    return cy.get('[data-cy="tooltip-content"]', { timeout: 2000 });
  }

  getTooltipIcon() {
    return cy.get('[data-cy="info-tooltip-icon"]');
  }

  getTooltipValue(tooltipvalue: string) {
    return cy.get('[data-testid="grid-row"][data-cy="' + tooltipvalue + '"]');
  }

  getTooltipTag() {
    return cy.get('[data-cy="tooltip-tag"]');
  }

  getNavigationTooltip(navigationtooltip: string) {
    return cy.get(
      '[data-testid="tooltip"][data-cy="' + navigationtooltip + '"]',
    );
  }

  getPageCounter() {
    return cy.get('[data-cy="page-counter"]');
  }

  getResultsPerPage() {
    return cy.get('[data-cy="results-per-page"]');
  }

  getNumberResults() {
    return cy.get('[data-cy="number-results"]', { timeout: 2000 });
  }

  getSidepanelFooterBtn(buttontext: string) {
    return cy
      .get('[data-cy="sidepanel-footer"]')
      .find('[data-testid="button"]')
      .contains(buttontext);
  }

  getLoggoutTime() {
    return cy.get('[data-cy="time-countdown"]');
  }

  getSidebarExpandIcon() {
    return cy.get('[data-cy="sidebar-expand-icon"]');
  }

  getDescendingArrow() {
    return cy.get('[data-cy="arrow-descending"]');
  }

  getAscendingArrow() {
    return cy.get('[data-cy="arrow-ascending"]');
  }
}
