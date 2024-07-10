class CartPage{

    pageElement = {
        cartQuantity: ()=> cy.get("div.cart_quantity"),
        checkoutBtn: ()=> cy.get("a.btn_action.checkout_button"),
        contShoppingBtn: ()=> cy.get("a.btn_secondary"),
        removeBtn: ()=> cy.get('button[class="btn_secondary cart_button"]')
    }

    cartQtyVisible(){
        this.pageElement.cartQuantity()
        .should("be.visible")
        return this
    }

    clickCheckoutBtn(){
        this.pageElement.checkoutBtn()
        .click()
        return this
    }
    
    clickContShpnBtn(){
        this.pageElement.contShoppingBtn()
        .click()
        return this
    }
}
modules.export = new CartPage