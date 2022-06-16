export default class Sauce {
    open (path) {
        return browser.url(`https://www.saucedemo.com/${path}`);
    }
};