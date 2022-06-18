import Sauce from './page.sauce';

class LoginSauce extends Sauce {
    get inputUsername () {return $('#user-name')}
    get inputPassword () {return $('#password');}
    get btnLogin () {return $('#login-button');}
    get errorContainer () {return $('.error-message-container.error')};
    get botImg () {return $('.bot_column');};
    get loginLogo () {return $('.login_logo')};
    get loginCredentials () {return $('#login_credentials')};
    get loginPassword () {return $('.login_password')};
    get errorBtn () {return $('.error-button')};

    async setUsername(username) {
        await this.inputUsername.setValue(username);
    }
    async setPassword(password) {
        await this.inputPassword.setValue(password);
    }

    async login (username, password) {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.btnLogin.click();
    }

    open () {
        return super.open('');
    }
}

export default new LoginSauce();