import { NewRegisterPage } from "../../pages/register.page";
import userData from '../../fixtures/userData.json'

describe('Test suite for registration naveenautomationlabs.com/opencart', () => {
  it('should open a new registration page', async () => {
    NewRegisterPage.openURL();
    NewRegisterPage.enterFirsName(userData.FirstName);
    NewRegisterPage.enterLastName(userData.LastName);
    NewRegisterPage.enterEmail(userData.email);
    NewRegisterPage.enterPhone(userData.phoneNumber);
    NewRegisterPage.enterPassword(userData.password);
    NewRegisterPage.checkPolicy();
    NewRegisterPage.clickContinue();
  })
})