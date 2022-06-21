import LoginSauce from  '../../pageobjects/sauce.login';
import InventorySauce from  '../../pageobjects/sauce.inventory';
import CartSauce from '../../pageobjects/cart.sauce';
import CheckoutSauce from  '../../pageobjects/checkout.sauce';


describe ('This test check Problem User buy processes and performance', () => {
    let originalTimeout;
   beforeEach(() => {
     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
     jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;
    });
    it ('Glich User should login whit valid credentials successfully', async () => {
        await LoginSauce.open();
        await LoginSauce.login('problem_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');

    })
    it('We can add items to cart and go there', async ()=> {
        await InventorySauce.buyItems();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    })
    it ('Go to the checkout passing the cart', async ()=> {
        await CartSauce.checkoutButton.click();
    })
    it('check the checkout form', async () => {
        await CheckoutSauce.completeForm('Matias', 'Vadala', '2000');
    })
    it ('The form have an error cause can not continue', async () =>{
        await expect (CheckoutSauce.firstNameInput).toHaveElementClassContaining('form_input error');
        await expect (CheckoutSauce.lastNameInput).toHaveElementClassContaining('form_input error');
        await expect (CheckoutSauce.zipCodeInput).toHaveElementClassContaining('form_input error');
        await expect (CheckoutSauce.errorContainer).toBeDisplayed();
    })
    afterAll ('Timeout', () => {
        console.log(browser.getTimeouts());
    })
});