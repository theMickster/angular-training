describe('ToH Dashboard', () => {
  it(`has title 'Tour of Heroes'`, () => {
    cy.visit("/dashboard");
    cy.contains('Tour of Heroes');
    cy.get('[data-cy="app-title"]').should('contain.text', 'Tour of Heroes');
    cy.title().should('equal', 'Tour of Heroes');
  })
});
