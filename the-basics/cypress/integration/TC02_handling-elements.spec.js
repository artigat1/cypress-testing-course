describe('Check the page navigation', () => {
    beforeEach(() => {
        cy.visit('http://qa.way2automation.com')
    })
    
    it('Verify element visibility and attribute values', () => {

        cy.get('#load_box > #load_form > :nth-child(5) > input')
            .should('be.visible')
            .type('Steve')

        cy.get('#load_box > #load_form > :nth-child(5) > input')
            .should('be.visible')
            .invoke('attr', 'type')
            .should('contain', 'text')

    })

    it('Verify parent, child and within elements', () => {
        cy.url().should('include', 'index.php')

        cy.get('#load_box')
            .find('input')
            .invoke('attr', 'type')
            .should('not.have', 'hidden')
            .its('length')
            .then(eleLength => {
                cy.log(`found ${eleLength} elements`)
            })

    })
})
