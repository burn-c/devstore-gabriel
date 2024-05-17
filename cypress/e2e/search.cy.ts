describe('search products', () => {
  it('should able to search for products', () => {
    cy.visit('/')

    cy.searchByQuery('moletom')

    cy.wait(500)

    cy.url().should('include', '/search')
    cy.url().should('include', 'q=moletom')

    cy.get('a[href^="/product"]').should('exist')
  })
  it('should not be able to visit the search page without a search query', () => {
    cy.on('uncaught:exception', () => false)

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
