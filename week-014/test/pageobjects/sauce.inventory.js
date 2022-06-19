class InventorySauce {
    get btnAddSlb () {return $('#add-to-cart-sauce-labs-backpack')};
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
    get selectBtn () {return $('.product_sort_container')};
    get cartBtn () {return $('#shopping_cart_container')};



    async addItemsTocart ()  {
        await this.btnAddSlb.click();
        await this.btnAddSlo.click();
        await this.cartBtn.click();
    }

}

export default new InventorySauce();
