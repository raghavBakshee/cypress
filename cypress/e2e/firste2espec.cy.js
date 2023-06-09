/// <reference types="Cypress" />

describe('Cypress Example', ()=>{
  it('Checking', () => {
    expect(true).to.equal(true)
  })

  it('Visit Cypress Page', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include','/commands/actions')

    cy.get('.action-email').type('fake@email.com')
    

    //  Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
    
  })
})
