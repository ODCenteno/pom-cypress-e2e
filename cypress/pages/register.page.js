export class RegisterPage {
  webLocators = {
    firstName: '#input-firstname',
    lastName: '#input-lastname',
    email: '#input-email',
    telephone: '#input-telephone',
    password: '#input-password',
    passwordConfirm: '#input-confirm',
    policyCheckbox: '[type="checkbox"]',
    continue: '.pull-right > .btn'
  }

  async openURL() {
    cy.visit(Cypress.env('URL'))
    cy.get('.list-inline > .dropdown > .dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(1) > a').click()
    cy.location('search').should('eq', '?route=account/register')
  }

  async enterFirsName(FName) {
    cy.get(this.webLocators.firstName).type(FName);
  }

  async enterLastName(LName) {
    cy.get(this.webLocators.lastName).type(LName);
  }

  async enterEmail(email) {
    cy.get(this.webLocators.email).type(email);
  }

  async enterPhone(phone_number) {
    cy.get(this.webLocators.telephone).type(phone_number);
  }

  async enterPassword(password) {
    cy.get(this.webLocators.password).type(password);
    cy.get(this.webLocators.passwordConfirm).type(password);
  }

  checkPolicy() {
    cy.get(this.webLocators.policyCheckbox).check();
  }

  async clickContinue() {
    cy.get(this.webLocators.continue).click();
  }

  async confirmAccountCreated() {
    cy.location('search').should('eq', '?route=account/success');
    cy.contains('Your Account Has Been Created!');
  }
}

export const NewRegisterPage = new RegisterPage()