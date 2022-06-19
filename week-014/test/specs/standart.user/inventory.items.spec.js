import LoginSauce from  '../../pageobjects/sauce.login';
import InventorySauce from  '../../pageobjects/sauce.inventory';

beforeAll('We need login first', () => {
    LoginSauce.open();
    LoginSauce.login('standard_user', 'secret_sauce');
});

describe('Check web interactions', () => {
    it ('Check all the add/remove buttons', async ()=> {
        await expect(InventorySauce.allAddBtn).toBeDisplayed();
        await expect(InventorySauce.allAddBtn).toBeClickable();
        await InventorySauce.allAddBtn.click();
        await expect(InventorySauce.allRemBtn).toBeDisplayed();
        await expect(InventorySauce.allRemBtn).toBeClickable();
        await InventorySauce.allRemBtn.click();
        await expect(InventorySauce.allAddBtn).toBeDisplayed();
    })
    it('Open and close navbar', async ()=>{
        await expect(InventorySauce.burguerMenu).toBeDisplayed();
        await expect(InventorySauce.burguerMenu).toBeClickable();
        await InventorySauce.burguerMenu.click();
        await expect(InventorySauce.navBar).toBeDisplayed();
        await InventorySauce.navCloseBtn.click();
        await expect(InventorySauce.burguerMenu).toBeDisplayed();
    });
    it ('Filter selector must have 4 childrens', async ()=> {
        await expect(InventorySauce.selectBtn).toHaveChildren(4);
    })
    it ('Check twitter button redirect us to the twiiter', async ()=> {
        await expect(InventorySauce.twitterBtn).toBeDisplayed();
        await expect(InventorySauce.twitterBtn).toBeClickable();
        const pageTwitter =  await InventorySauce.twitterBtn.click();
        await expect(pageTwitter).respond('https://twitter.com/saucelabs');
    })
});