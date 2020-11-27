describe('Check the page navigation', () => {
    it('Verify page title', () => {
        cy.visit('http://qa.way2automation.com')
        cy.url().should('include', 'index.php')
        cy.get('#load_box > #load_form > :nth-child(5) > input')
            .type('Steve')
        cy.title().should('contains', 'Welcome')
        cy.title()
            .then(($text) => {
                assert.equal($text, 'Welcome to the Test Site')
            })
    })    
})
