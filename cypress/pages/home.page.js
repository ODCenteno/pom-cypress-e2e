export class HomePage {
  webLocators = {
    searchInput: 'search',
    email: '#input-email',
    password: '#input-password',
    loginButton: '[value="Login"]',
    registrationBtn: '.well > a',
    addToCartBtn: '#content > div:nth-child(8) > div:nth-child(1) > div > div:nth-child(2) > div.button-group > button:nth-child(1)'
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
    cy.get(this.search).type(promt);
    cy.location('search').should('eql', `?route=product/search&search=${promt}`);
  }

  addProductToCart() {
    cy.get(this.addToCartBtn).click();
    cy.contains('Success: You have added')
  }
}

export const NewHomePage = new HomePage();