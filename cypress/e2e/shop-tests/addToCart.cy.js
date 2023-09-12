import { NewHomePage } from "../../pages/home.page";
import userData from '../../fixtures/userData.json';
import testData from '../../fixtures/testData.json'


describe('User Journey through the ecommerce', () => {
  beforeEach(() => {
    cy.login(userData.email, userData.password);
  })

  it('should search for a product', () => {
    NewHomePage.searchProduct(testData.productName)
      .should('eql', `?route=product/search&search=${testData.productName}`);
  })
  
  it('should add a product to the cart', () => {
    NewHomePage.searchProduct(testData.productName)
    NewHomePage.addProductToCart();
    NewHomePage.verifySuccessMessage()
      .should('contain', `Success: You have added ${testData.productName}`);
  })

  after(() => {
    NewHomePage.clearCartItems()
  })
})