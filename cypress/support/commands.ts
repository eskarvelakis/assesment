// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="cypress" />

declare namespace Cypress {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface Chainable<Subject = any> {
    /**
     * Custom command to select GroupUI element by selector and actual nested HTML element
     * @example cy.typeGroupui('[data-testid=deadline]', 'input', '2021-12-25')
     */
    typeGroupui(
      groupuiShadowRootSelector: string,
      htmlSelector: string,
      value: string,
    ): Chainable<Element>;

    enterGroupui(
      groupuiShadowRootSelector: string,
      htmlSelector: string,
    ): Chainable<Element>;

    specialCharacters(
      groupuiShadowRootSelector: string,
      htmlSelector: string,
      value: string | number | boolean,
    ): Chainable<Element>;

    typeWithValue(
      groupuiShadowRootSelector: string,
      htmlSelector: string,
      value: string | number | boolean,
    ): Chainable<Element>;
  }
}

Cypress.Commands.add(
  "typeGroupui",
  (groupuiShadowRootSelector, htmlSelector, value) => {
    cy.get(groupuiShadowRootSelector)
      .shadow()
      .find(htmlSelector)
      .should("be.visible")
      .should("not.have.attr", "readonly");

    cy.get(groupuiShadowRootSelector)
      .shadow()
      .find(htmlSelector)
      .type(value, { force: true, parseSpecialCharSequences: false });

    cy.get(groupuiShadowRootSelector)
      .shadow()
      .find(htmlSelector)
      .trigger("input", {
        force: true,
      });

    cy.get(groupuiShadowRootSelector)
      .shadow()
      .find(htmlSelector)
      .trigger("change", {
        force: true,
      });
  },
);

Cypress.Commands.add(
  "enterGroupui",
  (groupuiShadowRootSelector, htmlSelector) => {
    cy.get(groupuiShadowRootSelector)
      .shadow()
      .find(htmlSelector)
      .should("be.visible")
      .should("not.have.attr", "readonly");

    cy.get(groupuiShadowRootSelector)
      .shadow()
      .find(htmlSelector)
      .type("{enter}", { force: true });
  },
);

Cypress.Commands.add(
  "specialCharacters",
  (groupuiShadowRootSelector, htmlSelector, value) => {
    cy.get(groupuiShadowRootSelector)
      .shadow()
      .find(htmlSelector)
      .type(value as string, { force: true, parseSpecialCharSequences: true });
  },
);

Cypress.Commands.add(
  "typeWithValue",
  (groupuiShadowRootSelector, htmlSelector, value) => {
    cy.get(groupuiShadowRootSelector)
      .shadow()
      .find(htmlSelector, { timeout: 10000 })
      .type(value as string, { force: true, parseSpecialCharSequences: true });

    cy.get(groupuiShadowRootSelector).trigger("input", {
      force: true,
    });
  },
);
