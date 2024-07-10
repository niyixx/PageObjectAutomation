class PaymentPage{

    pageElements ={
        paymentInfo: ()=> cy.get("div.summary_info > div:nth-child(2)"),
        cartList: ()=> cy.get("div.cart_list"),
        finishBtn: ()=> cy.get('button[class="btn_action cart_button"]'),
        cancelBtn: ()=> cy.get('button[class="cart_cancel_link btn_secondary"]')
    }
}
module.exports = new PaymentPage