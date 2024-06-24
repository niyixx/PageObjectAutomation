import InventoryPage from "../../pageObjects/InventoryPage"



describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.saucedemo.com/v1/inventory.html')
      InventoryPage.addProductToCart()
      InventoryPage.removeProductFromCart()
    })
  })