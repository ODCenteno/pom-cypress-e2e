export class CurriculumPage {

  locators = {

  }

  visitPage() {
    cy.visit(Cypress.env('CV_URL'));
  }
}

export const NewCurriculumPage = new CurriculumPage();