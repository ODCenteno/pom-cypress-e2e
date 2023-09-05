import { NewHomePage } from "../../pages/home.page";
import userData from '../../fixtures/userData.json'

describe('Home Page testing suite', () => { 
  beforeEach(() => {
    NewHomePage.openURL();
  }) 
  context('Login process with POM', () => {
    it('should login', () => {
      // NewHomePage.openURL();
      NewHomePage.typeEmail(userData.email);
      NewHomePage.typePassword(userData.password);
      NewHomePage.clicLogin();
      NewHomePage.confirmAccess()
    }) 
  })

  context('New user button', () => {
    it('should take the user to the registration page', () => {
      //NewHomePage.openURL();
      NewHomePage.isNewCustomer();
    })
  }) 
})