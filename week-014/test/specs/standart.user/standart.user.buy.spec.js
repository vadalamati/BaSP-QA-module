import LoginSauce from  '../../pageobjects/sauce.login';
import InventorySauce from  '../../pageobjects/sauce.inventory';
import CartSauce from '../../pageobjects/cart.sauce';
import CheckoutSauce from  '../../pageobjects/checkout.sauce';
import CheckoutSauceTwo from  '../../pageobjects/checkout.2'
import CheckoutComplete from  '../../pageobjects/checkoutComplete'

describe ('This test check Standart User buy processes and its performance', () => {
    let originalTimeout;
   beforeEach(() => {
     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
     jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;
   });
    it ('Standart User should login whit valid credentials successfully', async () => {
        await LoginSauce.login('standard_user', 'secret_sauce');
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
    it ('check the checkout step two', async () =>{
        await CheckoutSauceTwo.finishButton.click();
    })
    it ('Check the checkout complete', async () =>{
        await CheckoutComplete.backHomeButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});

