import Footer from  '../pageobjects/footer.sauce';
import LoginSauce from  '../pageobjects/sauce.login';
import InventorySauce from  '../pageobjects/sauce.inventory';

beforeEach('We need login first', () => {
    LoginSauce.login('standard_user', 'secret_sauce');
});

describe ('Footer items test', ()=> {
    it ('Facebook logo interactions', async ()=> {
        await Footer.facebookBtn.click();
        await expect(Footer.facebookBtn).toHaveHref('https://www.facebook.com/saucelabs');
    })
    it ('Twitter logo interactions', async ()=> {
        await Footer.twitterBtn.click();
        await expect(Footer.twitterBtn).toHaveHref('https://twitter.com/saucelabs');
    })
    it ('Linkeind logo interactions', async ()=> {
        await Footer.linkedInBtn.click();
        await expect(Footer.linkedInBtn).toHaveHref('https://www.linkedin.com/company/sauce-labs/');
    })
});