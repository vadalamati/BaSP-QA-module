import LoginSauce from  '../../pageobjects/sauce.login';
import InventorySauce from  '../../pageobjects/sauce.inventory';
import Header from  '../../pageobjects/header.sauce';

beforeAll('We need login first', () => {
    LoginSauce.login('standard_user', 'secret_sauce');
});

describe('Check web interactions', () => {
    it ('Check all the add/remove buttons', async ()=> {
        await InventorySauce.addItemsTocart();
        await InventorySauce.remItemsTocart();
    });
    it ('Check all href from items', async () => {
        await InventorySauce.slbTittle.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        const goBackButton = await $('#back-to-products');
        await goBackButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it ('Check all href from items', async () => {
        await InventorySauce.slblTittle.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        const goBackButton = await $('#back-to-products');
        await goBackButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it ('Check all href from items', async () => {
        await InventorySauce.slbtTittle.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        const goBackButton = await $('#back-to-products');
        await goBackButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it ('Check all href from items', async () => {
        await InventorySauce.slfjTittle.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        const goBackButton = await $('#back-to-products');
        await goBackButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it ('Check all href from items', async () => {
        await InventorySauce.sloTiltte.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        const goBackButton = await $('#back-to-products');
        await goBackButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it ('Check all href from items', async () => {
        await InventorySauce.tttTitle.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        const goBackButton = await $('#back-to-products');
        await goBackButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it ('Filter selector must have 4 childrens', async ()=> {
        await expect(InventorySauce.selectBtn).toHaveChildren(4);
    });

});