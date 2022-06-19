class Header {
    get burguerMenu () {return $('#react-burger-menu-btn')};
    get navBar () {return $('.bm-menu-wrap')};
    get navCloseBtn () {return $('#react-burger-cross-btn')};
    get cartBtn () {return $('#shopping_cart_container')};
    get headerLogo  () {return $('.app_logo')};
}

export default new Header();