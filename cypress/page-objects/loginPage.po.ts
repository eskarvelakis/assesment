const USERNAME_INPUT = "#username";
const PASSWORD_INPUT = "#password";
const SUBMIT_BUTTON = "#submit";

export class LoginPage {
  navigateTo() {
    return cy.visit("/practice-test-login/");
  }

  getTitleText(titletext) {
    return cy.get("h2").contains(titletext);
  }

  fillUsername(username) {
    return cy.get(USERNAME_INPUT).type(username);
  }

  fillPassword(password) {
    return cy.get(PASSWORD_INPUT).type(password);
  }

  submit() {
    return cy.get(SUBMIT_BUTTON);
  }
}
