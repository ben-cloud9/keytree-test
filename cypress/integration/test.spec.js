
beforeEach(() => {
    cy.visit('http://localhost:3000');
});

it('should show error message if no input', () => {
    cy.get('.search-form__button').click();
    cy.get('.container')
        .should('contain', 'Please enter a search term');
});

it('should show error message if no repos found', () => {
    cy.get('.search-form__input').type('aopiwhgfapjjppo');
    cy.get('.search-form__button').click();
    cy.get('.error-message')
        .should('contain', 'Oops!')
        .and('contain', 'Unable to find GitHub data for search term');
});

it('should show results for valid search', () => {
    cy.get('.search-form__input').type('facebook');
    cy.get('.search-form__button').click();
    cy.get('.error-message').should('not.exist');
    cy.get('.repo-list-item').should('have.length', 100);

})