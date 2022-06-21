import LoginSauce from  '../../pageobjects/sauce.login';
import InventorySauce from  '../../pageobjects/sauce.inventory';

beforeAll('We need login first', () => {
    LoginSauce.login('standard_user', 'secret_sauce');
});

describe('Check web interactions', () => {
    it ('Check all the add/remove buttons', async ()=> {
        await InventorySauce.addItemsTocart();
        await InventorySauce.remItemsTocart();
    });
    it ('Check all interactions from item 0', async () => {
        await InventorySauce.slblTittle.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0');
        await InventorySauce.item0Clicks();
        const goBackButton = await $('#back-to-products');
        await goBackButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it ('Check all interactions from item 1', async () => {
        await InventorySauce.slbtTittle.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1');
        await InventorySauce.item1Clicks();
        const goBackButton = await $('#back-to-products');
        await goBackButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it ('Check all interactions from item 2', async () => {
        await InventorySauce.sloTiltte.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2');
        await InventorySauce.item2Clicks();
        const goBackButton = await $('#back-to-products');
        await goBackButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it ('Check all interactions from item 3', async () => {
        await InventorySauce.tttTitle.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3');
        await InventorySauce.item3Clicks();
        const goBackButton = await $('#back-to-products');
        await goBackButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it ('Check all interactions from item 4', async () => {
        await InventorySauce.slbTittle.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        await InventorySauce.item4Clicks();
        const goBackButton = await $('#back-to-products');
        await goBackButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it ('Check all interactions from item 5', async () => {
        await InventorySauce.slfjTittle.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5');
        await InventorySauce.item5Clicks();
        const goBackButton = await $('#back-to-products');
        await goBackButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it ('Filter selector must have 4 childrens', async ()=> {
        await expect(InventorySauce.selectBtn).toHaveChildren(4);
    });
    it ('Inventory Header must be deployed', async ()=> {
        await expect(InventorySauce.headerInventory).toBeDisplayed();
    })

});