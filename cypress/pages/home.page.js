export class HomePage {
  webLocators = {
    searchInput: '.form-control',
    clickSearch: '.input-group-btn > .btn',
    email: '#input-email',
    password: '#input-password',
    loginButton: '[value="Login"]',
    registrationBtn: '.well > a',
    addToCartBtn: '#content > div:nth-child(8) > div:nth-child(1) > div > div:nth-child(2) > div.button-group > button:nth-child(1)',
    successMessage: '.alert'
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

  searchProduct(promt) {
    cy.get(this.webLocators.searchInput).type(promt);
    cy.get(this.webLocators.clickSearch).click();
    return cy.location('search');
  }

  addProductToCart() {
    cy.get(this.webLocators.addToCartBtn).click();
  }
  
  verifySuccessMessage() {
    return cy.get(this.webLocators.successMessage);
  }
}

export const NewHomePage = new HomePage();