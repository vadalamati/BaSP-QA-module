class InventorySauce {
    get slbTittle () {return $('#item_4_title_link')};
    get slblTittle () {return $('#item_0_title_link')};
    get slbtTittle () {return $('#item_1_title_link')};
    get slfjTittle () {return $('#item_5_title_link')};
    get sloTiltte () {return $('#item_2_title_link')};
    get tttTitle () {return $('##item_3_title_link')};
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
    // get btnAddTtt () {return $('#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)')};
    // get btnRemTtt () {return $('//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]')};
    get selectBtn () {return $('.product_sort_container')};
    get cartBtn () {return $('#shopping_cart_container')};



    async buyItems ()  {
        await this.btnAddSlb.click();
        await this.btnAddSlbl.click();
        await this.btnAddSlo.click();
        await this.btnAddSlBTs.click();
        await this.btnAddSlfj.click();
        await this.btnAddTtt.click();
        await this.cartBtn.click();
    }
    async addItemsTocart ()  {
        await this.btnAddSlb.click();
        await this.btnAddSlbl.click();
        await this.btnAddSlo.click();
        await this.btnAddSlBTs.click();
        await this.btnAddSlfj.click();
        // await this.btnAddTtt.click();
    }
    async remItemsTocart ()  {
        await this.btnRemSlb.click();
        await this.btnRemSlbl.click();
        await this.btnRemSlo.click();
        await this.btnRemSlBTs.click();
        await this.btnRemSlfj.click();
        // await this.btnRemTtt.click();
    }

}

export default new InventorySauce();
