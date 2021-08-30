Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe('Filter and a product on the Product Page', () => {
  
  beforeEach('Load Web Page', ()=>{
    cy.visit('/')
  })
  it('Filter Products By Skincare', () => {
    //filter by skincare
    cy.wait(2000)
    cy.get('#__next > div > div > div.css-zzhkli > div.css-u9ut4o > div.css-1qsgf6d > div > div.css-gjxi74 > div > select')
    .select('skincare',{force: true})
    //Assert filter result is valid
    cy.get('#__next > div > div > div.css-zzhkli > div.css-u9ut4o > div.css-1qsgf6d > div > div.css-mafqmj > h1')
    .should('contain','Skincare')
   })
  it('Filter Products By Sets', () => {
    //filter by Sets
    cy.wait(2000)
    cy.get('[class="chakra-select css-qqlf57"]').select('sets',{force: true})
    //Assert filter result is valid
    cy.get('#__next > div > div > div.css-zzhkli > div.css-u9ut4o > div.css-1qsgf6d > div > div.css-mafqmj > h1')
    .should('contain','Sets')
   })
  it('Filter Products By New products', () => {
    //filter by New Products
    cy.wait(2000)
    cy.get('#__next > div > div > div.css-zzhkli > div.css-u9ut4o > div.css-1qsgf6d > div > div.css-gjxi74 > div > select')
    .select('new-products',{force: true})
    //Assert filter result is valid
    cy.get('#__next > div > div > div.css-zzhkli > div.css-u9ut4o > div.css-1qsgf6d > div > div.css-mafqmj > h1')
    .should('contain','New Products')
   })
  it('Filter Products by Hair and Body', () => {
     //filter by New Products
     cy.wait(2000)
     cy.get('#__next > div > div > div.css-zzhkli > div.css-u9ut4o > div.css-1qsgf6d > div > div.css-gjxi74 > div > select')
     .select('hair-and-body',{force: true})
     //Assert filter result is valid
     cy.get('#__next > div > div > div.css-zzhkli > div.css-u9ut4o > div.css-1qsgf6d > div > div.css-mafqmj > h1')
     .should('contain','Hair & Body Care')
    })
  it('Filter Products by Accessories', () => {
     //filter by New Products
     cy.wait(2000)
     cy.get('#__next > div > div > div.css-zzhkli > div.css-u9ut4o > div.css-1qsgf6d > div > div.css-gjxi74 > div > select')
     .select('accessories',{force: true})
     //Assert filter result is valid
     cy.get('#__next > div > div > div.css-zzhkli > div.css-u9ut4o > div.css-1qsgf6d > div > div.css-mafqmj > h1')
     .should('contain','Accessories')
     })
  it('Add item to cart and be routed to Shipping Form', () =>{
    //Click and Assert
    cy.wait(2000)
    cy.get('.css-1ahriyh:nth-child(3) > .chakra-stack > button').click({ force: true })
    //Verify Add Cart Modal is displayed
    cy.get('.react-cart-body > h4').should('contain',"First, let's personalize.")
    //Verify dropdowns are not empty
    cy.get('#personalize-product > div > select:nth-child(2)').should('not.be.empty')
    //Verify dropdowns are not empty
    cy.get('#personalize-product > div > select:nth-child(4)').should('not.be.empty')
    //Click "Add Cart"
    cy.get('.checkout-btn').should('be.visible').click()
    //Verify Items and description on Cart Modal
    cy.get('#cart-form > div.react-cart-top > div:nth-child(2) > h5').should('contain','YOUR CART')
    cy.get('#cart-form > div.react-cart-body > div').should('be.visible')
    //Verify subtotal / Amount is displayed on the description
    cy.get('#cart-form > div.cart-footer2 > div.cart-subtotal > div').scrollIntoView()
    .should('be.visible')
    //Verify Checkout button is present AND click Checkout button
    cy.get('.checkout-btn').should('contain','PROCEED TO CHECKOUT')
    cy.get('#cart-form > div.cart-footer2 > div.react-cart-buttons.false > button.checkout-btn').click()

    //Verify user is on the Shipping Address form
    cy.get('#__next > div > div.css-ay34j9 > div.chakra-stack.css-i6iokt > div.css-v659ka > form > p')
    .should('contain','Shipping Address')
    cy.get('#__next > div > div.css-ay34j9 > div.chakra-stack.css-i6iokt > div.css-v659ka > form > div > div.css-1hqwcr3 > button > p')
    .should('be.visible')
    .should('contain','Confirm Shipping Information')
  })
})
