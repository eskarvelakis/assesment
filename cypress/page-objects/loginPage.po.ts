const USERNAME_INPUT = "#username";
const PASSWORD_INPUT = "#password";
const SUBMIT_BUTTON = "#submit";

export class LoginPage {
  navigateTo() {
    return cy.visit("/practice-test-login/");
  }

  getTitleText(titleText: string) {
    return cy.get("h2").contains(titleText);
  }

  fillUsername(username: string) {
    return cy.get(USERNAME_INPUT).type(username);
  }

  fillPassword(password: string) {
    return cy.get(PASSWORD_INPUT).type(password);
  }

  submit() {
    return cy.get(SUBMIT_BUTTON);
  }
}
