class InventoryPage{
    
    addProductToCart(){
        cy.get('button[class="btn_primary btn_inventory"]').eq(0)
        .should("have.text","ADD TO CART")
        .click()
        return this
    }

    removeProductFromCart(){
        cy.get('button[class="btn_secondary btn_inventory"]').eq(0)
        .should("have.text","REMOVE")
        .click()
        return this
    }

}
module.exports = new InventoryPage();