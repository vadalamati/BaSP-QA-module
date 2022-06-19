class CheckoutSauce {
    get cancelButton () {return $('#cancel')};
    get continueButton () {return $('#continue')};
    get firstNameInput () {return $('#first-name')};
    get lastNameInput () {return $('#last-name')};
    get zipCodeInput () {return $('#postal-code')};
    get cartButton  () {return $('#shopping_cart_container')};

    async setFirstName(firstName) {
        await this.firstNameInput.setValue(firstName);
    };
    async setLastName(lastname) {
        await this.lastNameInput.setValue(lastname);
    };
    async setZip(zip) {
        await this.zipCodeInput.setValue(zip);
    };

    async completeForm (firstName, lastname, zip) {
        await this.setFirstName(firstName);
        await this.setLastName(lastname);
        await this.setZip(zip);
        await this.continueButton.click();
    };
}

export default new CheckoutSauce();