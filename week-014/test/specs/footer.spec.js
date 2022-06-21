import Footer from  '../pageobjects/footer.sauce';
import LoginSauce from  '../pageobjects/sauce.login';

beforeAll('We need login first', () => {
    LoginSauce.login('standard_user', 'secret_sauce');
});

describe ('Footer items test', ()=> {
    it ('Check Footer Copyright text', async () => {
        expect(Footer.footerText).toHaveText('© 2022 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    })
    it ('Cheeck Footer img has been deployed', async ()=> {
        expect(Footer.footerImg).toBeDisplayed();
    })
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