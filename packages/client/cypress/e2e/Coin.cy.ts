describe('DisplayingCoin', function() {
    it('should be open page', function() {
        cy.visit('/bitcoin');
        cy.get('[data-testid=content]').should('not.be.empty');
    });
    it('should be return back', function() {
        cy.visit('/');
        cy.get('[data-testid=add-coin]').eq(0).click();
        cy.visit('/bitcoin');
        cy.get('[data-testid=back-to]').click();
        expect(location.href.includes('/bitcoin')).equal(false);
    });
});
export default {};
