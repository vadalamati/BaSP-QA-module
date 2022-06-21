import LoginSauce from  '../pageobjects/sauce.login';
import InventorySauce from  '../pageobjects/sauce.inventory';
import CartSauce from '../pageobjects/cart.sauce';
import CheckoutSauce from  '../pageobjects/checkout.sauce';

beforeAll ('We need login go to the cart', () => {
    LoginSauce.login('standard_user', 'secret_sauce');
    InventorySauce.buyItems();
    CartSauce.checkoutButton.click();
});

afterEach ('We need reaload page', ()=> {
    browser.url('https://www.saucedemo.com/checkout-step-one.html');
});

describe ('This test check all form error are possibles', () => {
    it('If whe not complet firts name, error modal should be deployed', async () => {
        await CheckoutSauce.completeForm('', 'Vadala', '2000');
        await expect(LoginSauce.errorContainer).toHaveText('Error: First Name is required');
    });
    it('If whe not complet last name, error modal should be deployed', async () => {
        // browser.url()
        await CheckoutSauce.completeForm('Matias', '', '2000');
        await expect(LoginSauce.errorContainer).toHaveText('Error: Last Name is required');
    });
    it('If whe not complet firts name, error modal should be deployed', async () => {
        await CheckoutSauce.completeForm('Matias', 'Vadala', '');
        await expect(LoginSauce.errorContainer).toHaveText('Error: Postal Code is required');
    });
    it ('If we click on cancel button, we should go back to the cart', async () =>{
        await CheckoutSauce.cancelButton.click();
        expect(browser.url('https://www.saucedemo.com/cart.html'));
    });
    it ('We cant continue whit empty data in the form', async () => {
        await CheckoutSauce.continueButton.click();
        await expect (CheckoutSauce.errorContainer).toBeDisplayed();
    })
});
