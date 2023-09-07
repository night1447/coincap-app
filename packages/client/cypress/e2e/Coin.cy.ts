describe('DisplayingCoin', function() {
    it('should be open page', function() {
        cy.visit('/bitcoin');
        cy.get('main').should('not.be.empty');
    });
    it('should be return back', function() {
        cy.visit('/');
        cy.get('tr').contains('+').eq(0).click();
        cy.visit('/bitcoin');
        cy.contains('Назад').click();
        expect(location.href.includes('/bitcoin')).equal(false);
    });
});
export default {};
