import { NewCurriculumPage } from "../../pages/curriculum.page";

describe('Go to main page quickcurriculum', () => {
  it('Should open the main page', () => {
    NewCurriculumPage.visitPage()
    cy.get('h1').contains('Quick Curriculum')
    cy.get('.text-md').contains('📜 Quick Curriculum')
    cy.get('.py-3 > a').click()
    cy.location('pathname').should('eq', '/login')
  })
})