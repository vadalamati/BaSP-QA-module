import Sauce from './page.sauce';

class InventorySauce extends Sauce {

    get btnAddSlb () {return $('.#add-to-cart-sauce-labs-backpack')};
    get btnRemSlb () {return $('#remove-sauce-labs-backpack')};
    get btnAddSlbl () {return $('#add-to-cart-sauce-labs-bike-light')};
    get btnRemSlbl () {return $('#remove-sauce-labs-bike-light')};
    get btnAddSlBTs () {return $('#add-to-cart-sauce-labs-bolt-t-shirt')};
    get btnRemSlBTs () {return $('#remove-sauce-labs-bolt-t-shirt')};
    get btnAddSlfj () {return $('#add-to-cart-sauce-labs-fleece-jacket')};
    get btnRemSlfj () {return $('#remove-sauce-labs-fleece-jacket')};
    get btnAddSlo () {return $('#add-to-cart-sauce-labs-onesie')};
    get btnRemSlo () {return $('#remove-sauce-labs-onesie')};
    get btnAddTtt () {return $('#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)')};
    get btnRemTtt () {return $('#remove-test\.allthethings\(\)-t-shirt-\(red\)')};
    get burguerMenu () {return $('#react-burger-menu-btn')};
    get navBar () {return $('.bm-menu-wrap')};
    get navCloseBtn () {return $('.react-burger-cross-btn')};
    get cartBtn () {return $('#shopping_cart_container')};
    get selectBtn () {return $('.product_sort_container')};
    get twitterBtn () {return $('social_twitter')};
    get facebookBtn () {return $('.social_facebook')};
    get footerImg () {return $('.footer_robot')};
    get headerLogo  () {return $('.app_logo')};

    open () {
        return super.open('/inventory.html');
    }
}

export default new InventorySauce();
