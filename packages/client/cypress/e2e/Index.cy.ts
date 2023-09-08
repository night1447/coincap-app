describe('Displaying main Interface', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should have a table', () => {
        cy.get('[data-testid=table]');
        cy.get('[data-testid=coin]');
    });
    it('should show modal', function() {
        cy.get('[data-testid=add-coin]').eq(0).click();
        cy.get('#modal').should('not.be.empty');
    });

});

describe('Interaction with interface coin', function() {
    let form: Cypress.Chainable<JQuery<HTMLFormElement>>;
    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-testid=add-coin]').eq(0).click();
        form = cy.get('[data-testid=purchase]');
        form.get('#purchase-input').type('10').should('have.value', '10');
    });
    it('should correct plus minus button and input', function() {
        const input = form.get('#purchase-input');
        const minus = form.get('[data-testid=purchase-minus]');
        form.get('[data-testid=purchase-plus]').click();
        input.should('have.value', '10.01');
        input.type('-10').should('have.value', '10.01');
        input.clear().type('0');
        minus.click();
        input.should('have.value', '0');
        input.clear().type('10');
        minus.click();
        input.should('have.value', '9.99');
    });
    it('should be add coin', function() {
        cy.get('[data-testid=purchase-submit]').click();
        cy.get('#message').should('not.be.empty');
    });
});


describe('Displaying messageBox', function() {
    it('should be display message box', function() {
        cy.visit('/');
        cy.get('[data-testid=add-coin]').eq(0).click();
        cy.get('[data-testid=purchase-submit]').click();
        cy.get('#message').should('not.be.empty');
    });
});
describe('Interaction with Profile', function() {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should open empty profile', function() {
        cy.get('[data-testid=profile-show]').click();
        cy.get('#modal').should('not.be.empty');
        cy.get('#modal').contains('Ваш портфель пуст').should('not.be.empty');
    });
});
describe('Interaction with bag', function() {
    let form: Cypress.Chainable<JQuery<HTMLFormElement>>;
    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-testid=add-coin]').eq(0).click();
        form = cy.get('[data-testid=purchase]');
        form.get('#purchase-input').type('10').should('have.value', '10');
        cy.get('[data-testid=purchase-submit]').click();
        cy.get('#message').should('not.be.empty');
        cy.get('[data-testid=message-close]').click();
        cy.get('[data-testid=close-modal]').click();
        cy.get('[data-testid=profile-show]').click();
    });
    it('should have coin', function() {
        cy.get('#modal').contains('Стоимость портфеля');
    });
    it('should delete coin', function() {
        cy.get('[data-testid=coin-delete]').click();
        cy.get('#modal').contains('Ваш портфель пуст').should('not.be.empty');
    });
});


export default {};
