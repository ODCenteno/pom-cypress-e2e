export class HomePage {
  webLocators = {
    searchInput: 'search',
    email: '#input-email',
    password: '#input-password',
    loginButton: '[value="Login"]',
    registrationBtn: '.well > a'
  }

  openURL() {
    cy.visit(Cypress.env('loginURL'));
    cy.location('search').should('eql', '?route=account/login')
  }

  typeEmail(email) {
    cy.get(this.webLocators.email).type(email);
  }

  typePassword(password) {
    cy.get(this.webLocators.password).type(password);
  }

  clicLogin() {
    cy.get(this.webLocators.loginButton).click();
  }

  confirmAccess() {
    cy.location('search').should('eql', '?route=account/account')
  }

  isNewCustomer() {
    cy.get(this.webLocators.registrationBtn).click();
    cy.location('search').should('eql', '?route=account/register');
    cy.contains('Register Account');
  }
}

export const NewHomePage = new HomePage();