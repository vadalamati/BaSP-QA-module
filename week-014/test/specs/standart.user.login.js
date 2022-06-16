import LoginSauce from  '../pageobjects/sauce.login';

describe ('User login', () => {
    it ('should login whit valid credentials successfully', async () => {
        await LoginSauce.open();
        await LoginSauce.login('standard_user', 'secret_sauce');
    })
})