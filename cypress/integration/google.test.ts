describe('This is the first example of cypress', () => {
  it('should have a title', () => {
    cy.visit('https://www.google.com/');
    debugger;
    cy.title().should('be.equal', 'Google');
  });
});
