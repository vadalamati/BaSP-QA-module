import LoginSauce from  '../pageobjects/sauce.login';
import InventorySauce from  '../pageobjects/sauce.inventory';

describe ('This test check Standard User buy processes', () => {
    it ('Standart User should login whit valid credentials successfully', async () => {
        await LoginSauce.open();
        await LoginSauce.login('standard_user', 'secret_sauce');
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it('We can add items to cart and go there', async ()=> {
        await InventorySauce.addItemsTocart();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    })
});