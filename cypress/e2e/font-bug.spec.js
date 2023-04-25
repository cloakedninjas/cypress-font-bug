describe('Font bug', () => {
    it('should show rules', () => {
        cy.visit('/');
        cy.get('#test-element').compareSnapshot('test-image');
    });
});
