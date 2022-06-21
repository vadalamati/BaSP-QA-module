import InventorySauce from '../pageobjects/sauce.inventory';
import Header from  '../pageobjects/header.sauce';
import LoginSauce from  '../pageobjects/sauce.login';

beforeEach('We need login first', () => {
    LoginSauce.login('standard_user', 'secret_sauce');
});
afterEach ('pause', () => {
    browser.pause(5000);
})
describe ('Header items test', ()=> {
    it('Open and close navbar', async ()=>{
        await expect(Header.burguerMenu).toBeDisplayed();
        await expect(Header.burguerMenu).toBeClickable();
        await Header.burguerMenu.click();
        await expect(Header.navBar).toBeDisplayed();
        await Header.navCloseBtn.click();
        await expect(Header.burguerMenu).toBeDisplayed();
    });
    it ('Img Header should be exists', async () => {
        await expect(Header.headerLogo).toBeDisplayed();

    })
    it ('Navbar Logout should let us to the login', async () => {
        await Header.burguerMenu.click();
        browser.pause(5000);
        await Header.logout.click();
        browser.pause(5000);
        expect(browser).toHaveUrl('https://www.saucedemo.com/');
    })
    it ('Navbar About should let us to the Sauce Lab Web', async ()=> {
        await Header.burguerMenu.click();
        browser.pause(5000);
        await Header.about.click();
        browser.pause(5000);
        expect(browser).toHaveUrl('https://saucelabs.com/');
    })
    it ('Cart Button should be exist and interactive', async () => {
        await expect(Header.cartBtn).toBeDisplayed();
        await expect(Header.cartBtn).toBeClickable();
        browser.pause(5000);
        await Header.cartBtn.click();
        browser.pause(5000);
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    })
    it ('Navbar Reset app should reset the cart', async () => {
        await InventorySauce.addItemsTocart();
        browser.pause(5000);
        await expect(Header.cartBtn).toHaveText('6');
        await Header.burguerMenu.click();
        await expect(Header.resetApp).toBeClickable();
        await Header.resetApp.click();
        browser.pause(5000);
        await expect(Header.cartBtn).toHaveText('');
    })
});
