import LoginSauce from  '../pageobjects/sauce.login';

describe ('User login', () => {
    it ('Standart User should login whit valid credentials successfully', async () => {
        await LoginSauce.open();
        await LoginSauce.login('standard_user', 'secret_sauce');
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it ('Locked out user cant login', async () => {
        await LoginSauce.open();
        await LoginSauce.login('locked_out_user', 'secret_sauce');
        await expect(LoginSauce.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    })
    it ('Glicht User should login whit valid credentials successfully', async () => {
        await LoginSauce.open();
        await LoginSauce.login('performance_glitch_user', 'secret_sauce');
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it ('Problem User should login whit valid credentials successfully', async () => {
        await LoginSauce.open();
        await LoginSauce.login('problem_user', 'secret_sauce');
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it ('Empty username should display error', async () => {
        await LoginSauce.open();
        await LoginSauce.login('', 'secret_sauce');
        await expect(LoginSauce.errorContainer).toHaveText('Epic sadface: Username is required');
    })
    it ('Empty password should display error', async () => {
        await LoginSauce.open();
        await LoginSauce.login('standard_user', '');
        await expect(LoginSauce.errorContainer).toHaveText('Epic sadface: Password is required');
    })
    it ('False credentials should display error', async () => {
        await LoginSauce.open();
        await LoginSauce.login('falseuser', 'falsepass');
        await expect(LoginSauce.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    })
});