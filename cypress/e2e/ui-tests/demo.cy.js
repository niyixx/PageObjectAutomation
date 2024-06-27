import InventoryPage from "../../pageObjects/InventoryPage"



describe('template spec', () => {
  before("Navigate to URL", ()=>{
    cy.visit(Cypress.env('url'))
  })
    it('passes', () => {
      cy.visit('https://www.saucedemo.com/v1/inventory.html')
      InventoryPage.addToCartBtnVisible(1)
      InventoryPage.addProductToCart(1)
      InventoryPage.removeFromCartBtnVisible(0)
      InventoryPage.removeProductFromCart(0)
    })
  })