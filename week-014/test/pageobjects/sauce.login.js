import Sauce from './page.sauce';

class LoginSauce extends Sauce {
    get inputUsername () {
        return $('#user-name');
    }
    get inputPassword () {
        return $('#password');
    }
    get btnLogin () {
        return $('#login-button')
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    open () {
        return super.open('');
    }
}

export default new LoginSauce();