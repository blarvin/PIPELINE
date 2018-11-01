describe('Initial setup proof test:', function () {
    it('visits the app and finds some HTML on a page:', function () {
        cy.visit('localhost:3000')

        cy.contains('pipe')
    })
})
