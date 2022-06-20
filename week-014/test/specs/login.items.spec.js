import LoginSauce from  '../pageobjects/sauce.login';

beforeAll('open browser', async () => {
    LoginSauce.open();
});
describe ('This test check all elements for login page', () => {
    it('Check BotImg has been deployed', async () =>{
        await expect(LoginSauce.botImg).toBeDisplayed();
    })
    it('Check login logo has been deployed', async () => {
        await expect(LoginSauce.loginLogo).toBeDisplayed();
    })
    it('Check the login button are clickeable', async () => {
        await expect(LoginSauce.btnLogin).toBeClickable();
    })
    it('Check the error button are clickeable', async () => {
        await LoginSauce.login('display', 'errorbtn');
        await expect(LoginSauce.errorBtn).toBeClickable();
    })
    it('Check the login username div have childrens' , async () => {
        await expect(LoginSauce.loginCredentials).toHaveChildren(5);
    })
    it('Check the login password only are 1' , async () => {
        await expect(LoginSauce.loginPassword).toHaveChildren(1);
    })
});