import { NewHomePage } from "../../pages/home.page";
import userData from '../../fixtures/userData.json';


describe('User Journey through the ecommerce', () => {
  beforeEach('login', () => {
    cy.login(userData.email, userData.password);
  })

  it('should search for a Apple product', () => {
    NewHomePage.searchProduct('macbook');
    NewHomePage.addProductToCart();
  })
})