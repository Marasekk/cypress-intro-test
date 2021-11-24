import * as testFixtures from '../fixtures/test_fixtures.json'
require('cypress-xpath')
Cypress.config("chromeWebSecurity", false);

describe('MageXo intro test', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit(testFixtures.env.homepage)
  })

  context('Newsletter', () => {
    it('Sign for a newsletter', () => {
    cy.log('remove before flight')
    cy.url().should('eq', testFixtures.env.homepage)
     const noCookies = cy.xpath('//*[@id="__layout"]/div/div[2]/div[2]/button[1]')
     noCookies.click()
     const heartIcon = cy.xpath('//*[@id="__layout"]/div/header/div/div/div/div[3]/div[2]/a');
     heartIcon.click()
     cy.url().should('eq', 'https://sfx.demo.magexo.cloud/wishlist');
     const newsletterInput = cy.xpath('//*[@id="newsletterEmail"]');
     newsletterInput.click().type(testFixtures.user.email)
     const submitButton = cy.xpath('//*[@id="__layout"]/div/footer/div/div/div/aside[4]/div[1]/form/div[2]/button/span');
     submitButton.click()
    })
  })

  context('Shopping cart', () => {

    it('Add an item to shopping cart', () => {
      cy.log('remove before flight')
      cy.url().should('eq', testFixtures.env.homepage)
      const noCookies = cy.xpath('//*[@id="__layout"]/div/div[2]/div[2]/button[1]')
      noCookies.click()
      const computerPage = cy.xpath('//*[@id="__layout"]/div/nav/div/ul/li[3]/a');
      computerPage.click()
      cy.url().should('eq', 'https://sfx.demo.magexo.cloud/computers-peripherals.html');
      const monitorItem = cy.xpath('//*[@id="__layout"]/div/div[2]/div[2]/div/div/main/div[2]/div[1]/figure/figcaption/div[2]/button');
      monitorItem.click()
      const backToPurchase = cy.get('.btn-outline-secondary');
      backToPurchase.click()
     })

    it('Remove item from shopping cart', () => {
      cy.log('remove before flight')
      cy.url().should('eq', testFixtures.env.homepage)
      const noCookies = cy.xpath('//*[@id="__layout"]/div/div[2]/div[2]/button[1]')
      noCookies.click()
      const computerPage = cy.xpath('//*[@id="__layout"]/div/nav/div/ul/li[3]/a');
      computerPage.click()
      cy.url().should('eq', 'https://sfx.demo.magexo.cloud/computers-peripherals.html');
      const monitorItem = cy.xpath('//*[@id="__layout"]/div/div[2]/div[2]/div/div/main/div[2]/div[1]/figure/figcaption/div[2]/button');
      monitorItem.click()
      const toCart = cy.get('[data-cy="continue-to-checkout"]')
      toCart.click()
      const deleteFromCart = cy.xpath('//*[@id="__layout"]/div/div[2]/div/div[1]/div[1]/div/div[5]/button');
      deleteFromCart.click()
      
    })
    
    it('Place order', () => {
      cy.log('remove before flight')
      cy.url().should('eq', testFixtures.env.homepage)
      const noCookies = cy.xpath('//*[@id="__layout"]/div/div[2]/div[2]/button[1]')
      noCookies.click()
      const ComputerPage = cy.xpath('//*[@id="__layout"]/div/nav/div/ul/li[3]/a');
      ComputerPage.click()
      const pickProduct = cy.xpath('//*[@id="__layout"]/div/div[2]/div[2]/div/div/main/div[1]/div/div[3]/a')
      pickProduct.click()
      const addToCart = cy.xpath('//*[@id="__layout"]/div/div[2]/div[2]/div/div/div/main/div[6]/button')
      addToCart.click()
      const toCart = cy.get('[data-cy="continue-to-checkout"]')
      toCart.click()
      const personal = cy.xpath('//*[@id="__layout"]/div/div[2]/div/div[1]/div[3]/div/div[1]/div[1]/div[1]/img')
      personal.click()
      const brno = cy.xpath('//*[@id="__layout"]/div/div[2]/div/div[1]/div[3]/div/div[2]/div[2]/div[1]')
      brno.click()
      const googlePay = cy.xpath('//*[@id="__layout"]/div/div[2]/div/div[1]/div[4]/div/div[1]/div/div[1]/div[1]/img')
      googlePay.click()
      cy.wait(15000)
      const mail = cy.xpath('//*[@id="email"]')
      mail.click().type(testFixtures.user.email)
      const firstName = cy.xpath('//*[@id="firstName"]')
      firstName.click().type(testFixtures.user.firstName)
      const lastName = cy.xpath('//*[@id="lastName"]')
      lastName.click().type(testFixtures.user.lastName)
      const phoneNumber = cy.xpath('//*[@id="telephone"]')
      phoneNumber.click().type(testFixtures.user.phoneNumber)
      const checkBox = cy.xpath('//*[@id="Souhlas"]')
      checkBox.click()
      const checkData = cy.xpath('//*[@id="Data"]')
      checkData.click()
      const submit = cy.xpath('//*[@id="__layout"]/div/div[2]/div/div[1]/div[6]/div/form/button')
      submit.click()
    })
  })

  context('Search bar', () => {
    it('Search for an item and open it', () => {
      cy.log('remove before flight')
      cy.url().should('eq', testFixtures.env.homepage)
      const noCookies = cy.xpath('//*[@id="__layout"]/div/div[2]/div[2]/button[1]')
      noCookies.click()
      const searchBar = cy.get('.form-control.inner-shadow.search-input');
      searchBar.trigger('mousedown');
      searchBar.click().wait(2000).type('monitor').wait(2000)
      const searchPick = cy.xpath('//*[@id="search-form"]/div[2]/div/a[1]/span[3]');
      searchPick.click()
    })

    it('Filter brand while searching', () => {
      cy.log('remove before flight')
      cy.url().should('eq', testFixtures.env.homepage)
      const noCookies = cy.xpath('//*[@id="__layout"]/div/div[2]/div[2]/button[1]')
      noCookies.click()
      const tools = cy.xpath('//*[@id="__layout"]/div/nav/div/ul/li[1]/a')
      tools.click()
      const brandEWT = cy.xpath('//*[@id="__layout"]/div/div[2]/div[2]/div/div/aside/div/div/article[2]/div/div/label[3]/div')
      brandEWT.click()
      
      //hint: try to use GraphQL and intercepts here
    })

    it('Filter price while searching', () => {
      cy.log('remove before flight')
      const noCookies = cy.xpath('//*[@id="__layout"]/div/div[2]/div[2]/button[1]')
      noCookies.click()
      const tools = cy.xpath('//*[@id="__layout"]/div/nav/div/ul/li[1]/a')
      tools.click()
      const minPrice = cy.xpath('//*[@id="__layout"]/div/div[2]/div[2]/div/div/aside/div/div/article[1]/div/div/form/div[2]/div/input')
      minPrice.click().type('1500').type('{enter}')
      const maxPrice = cy.xpath('//*[@id="__layout"]/div/div[2]/div[2]/div/div/aside/div/div[2]/article[1]/div/div/form/div[3]/div/input')
      maxPrice.click().type('{selectall}{backspace}').type('5000').type('{enter}')

      //hint: try to use GraphQL and intercepts here
      
    })
  }) 
}) 
