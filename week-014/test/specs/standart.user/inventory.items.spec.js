import LoginSauce from  '../../pageobjects/sauce.login';
import InventorySauce from  '../../pageobjects/sauce.inventory';
import Header from  '../../pageobjects/header.sauce';

beforeAll('We need login first', () => {
    // LoginSauce.open();
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
    });
    it('Open and close navbar', async ()=>{
        await expect(Header.burguerMenu).toBeDisplayed();
        await expect(Header.burguerMenu).toBeClickable();
        await Header.burguerMenu.click();
        await expect(Header.navBar).toBeDisplayed();
        await Header.navCloseBtn.click();
        await expect(Header.burguerMenu).toBeDisplayed();
    });

    it ('Navbar About should let us to the Sauce Lab Web', async ()=> {
        await expect(InventorySauce.selectBtn).toHaveChildren(4);
    });

    it ('Navbar Logout should let us to the login', async ()=> {
        await expect(InventorySauce.selectBtn).toHaveChildren(4);
    })
    it ('Navbar About should let us to the Sauce Lab Web', async ()=> {
        await expect(InventorySauce.selectBtn).toHaveChildren(4);
    })

    it ('Filter selector must have 4 childrens', async ()=> {
        await expect(InventorySauce.selectBtn).toHaveChildren(4);
    });

    // it ('Check twitter button redirect us to the twiiter', async ()=> {
    //     await expect(InventorySauce.twitterBtn).toBeDisplayed();
    //     await expect(InventorySauce.twitterBtn).toBeClickable();
    //     const pageTwitter =  await InventorySauce.twitterBtn.click();
    //     await expect(pageTwitter).respond('https://twitter.com/saucelabs');
    // });
});