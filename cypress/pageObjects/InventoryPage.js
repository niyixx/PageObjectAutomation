class InventoryPage{
    
    pageElements = {
        addToCartBtn: ()=> cy.get('button[class="btn_primary btn_inventory"]'),
        removeFromCartBtn: ()=> cy.get('button[class="btn_secondary btn_inventory"]')
    }

    addToCartBtnVisible(id){
        this.pageElements.addToCartBtn().eq(id)
        .should("be.visible")
        return this
    }

    addProductToCart(id){
        this.pageElements.addToCartBtn().eq(id)
        .should("have.text","ADD TO CART")
        .click()
        return this
    }

    removeFromCartBtnVisible(id){
        this.pageElements.removeFromCartBtn().eq(id)
        .should("be.visible")
        return this
    }

    removeProductFromCart(id){
        this.pageElements.removeFromCartBtn().eq(id)
        .should("have.text","REMOVE")
        .click()
        return this
    }

}
module.exports = new InventoryPage();