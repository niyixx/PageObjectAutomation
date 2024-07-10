class CheckoutInfoPage{

    pageElements = {
        firstNameField: ()=> cy.get('[data-test="firstName"]'),
        lastNameField: ()=> cy.get('#[data-test="lastName"]'),
        postalCodeField:()=>  cy.get('[data-test="postalCode"]'),
        continuebtn: ()=> cy.get('button[class="btn_primary cart_button"]'),
        cancelBtn: ()=> cy.get('button[class="cart_cancel_link btn_secondary"]')
    }

    enterFirstName(name){
        this.pageElements.firstNameField()
        .type(name)
        return this
    }

    enterLastName(name){
        this.pageElements.lastNameField()
        .type(name)
        return this
    }

    enterPostalCode(code){
        this.pageElements.postalCodeField()
        .type(code)
        return this
    }

    clickContinueBtn(){
        this.pageElements.continuebtn()
        .click()
        return this
    }

}
module.exports = new CheckoutInfoPage