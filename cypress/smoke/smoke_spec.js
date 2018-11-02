describe('Smoke Test', function() {
  it('Website is hosted and online', function() {
    cy.visit('https://pipe-production.herokuapp.com/')

    cy.get('h1').should('contain', 'pipe')
  })
})
