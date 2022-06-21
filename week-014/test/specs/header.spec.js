import Header from  '../pageobjects/header.sauce';
import LoginSauce from  '../pageobjects/sauce.login';

beforeEach('We need login first', () => {
    browser.pause(500); //if i don't this my pc explodes
    LoginSauce.login('standard_user', 'secret_sauce');
});

describe ('Header items test', ()=> {
    it('Open and close navbar', async ()=>{
        await expect(Header.burguerMenu).toBeDisplayed();
        await expect(Header.burguerMenu).toBeClickable();
        await Header.burguerMenu.click();
        await expect(Header.navBar).toBeDisplayed();
        await Header.navCloseBtn.click();
        await expect(Header.burguerMenu).toBeDisplayed();
        // browser.pause(500);
    });
    it ('Navbar About should let us to the Sauce Lab Web', async ()=> {
        await Header.burguerMenu.click();
        await Header.about.click();
        await expect(browser).toHaveUrl('https://saucelabs.com/');
        // browser.pause(500);
    })
    it ('Navbar Logout should let us to the login', async () => {
        await Header.burguerMenu.click();
        await Header.logout.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
        // browser.pause(500);
    })
    it ('Img Header should be exists', async () => {
        await expect(Header.headerLogo).toBeDisplayed();
        // browser.pause(500);
    })
    it ('Cart Button should be exist and interactive', async () => {
        await expect(Header.cartBtn).toBeDisplayed();
        await expect(Header.cartBtn).toBeClickable();
        await Header.cartBtn.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        // browser.pause(500);
    })
    it ('Navbar Logout should let us to the login', async () => {
        await Header.burguerMenu.click();
        await Header.resetApp.click();
        await expect(Header.resetApp).toBeClickable();
        // browser.pause(500);
    })
});


