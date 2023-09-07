describe('Displaying main Interface', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should have a table', () => {
        cy.get('table');
        cy.get('tbody');
        cy.get('tr');
    });
    it('should show modal', function() {
        cy.get('tr').contains('+').eq(0).click();
        cy.get('#modal').should('not.be.empty');
    });

});

describe('Interaction with interface coin', function() {
    let form: Cypress.Chainable<JQuery<HTMLFormElement>>;
    beforeEach(() => {
        cy.visit('/');
        cy.get('tr').contains('+').eq(0).click();
        form = cy.get('form');
        form.get('input[type=number]').type('10').should('have.value', '10');
    });
    it('should correct plus minus button and input', function() {
        const input = form.get('input[type=number]');
        const minus = form.get('button').contains('-');
        form.contains('+').click();
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
        cy.get('form').contains('Подтвердить').click();
        cy.get('#message').should('not.be.empty');
    });
});


describe('Displaying messageBox', function() {
    it('should be display message box', function() {
        cy.visit('/');
        cy.get('tr').contains('+').eq(0).click();
        cy.get('form').contains('Подтвердить').click();
        cy.get('#message').should('not.be.empty');
    });
});
describe('Interaction with Profile', function() {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should open empty profile', function() {
        cy.get('header button').click();
        cy.get('#modal').should('not.be.empty');
        cy.get('#modal').contains('Ваш портфель пуст').should('not.be.empty');
    });
});
describe('Interaction with bag', function() {
    let form: Cypress.Chainable<JQuery<HTMLFormElement>>;
    beforeEach(() => {
        cy.visit('/');
        cy.get('tr').contains('+').eq(0).click();
        form = cy.get('form');
        form.get('input[type=number]').type('10').should('have.value', '10');
        cy.get('form').contains('Подтвердить').click();
        cy.get('#message').should('not.be.empty');
        cy.get('#message button').click();
        cy.get('#modal button').contains('Закрыть модальное окно').parent().click();
        cy.get('header button').click();
    });
    it('should have coin', function() {
        cy.get('#modal').contains('Стоимость портфеля');
    });
    it('should delete coin', function() {
        cy.get('#modal li button').click();
        cy.get('#modal').contains('Ваш портфель пуст').should('not.be.empty');
    });
});


export default {};
