import setInitialCookies from "../src/utils";

describe('Film landing page', () => {
  before(() => {
    setInitialCookies();
		cy.visit('/films');
	});

  it('can be navigated to from the film index page', () => {
    cy.get('[data-testid="filmsPage-videoCard"]')
      .first()
      .click();
    
    cy.get('[data-testid="codaButton"]')
      .first()
      .click();
  });

  it('contains a title', () => {
    cy
      .get('[data-testid="contentHeading-title"]')
      .should('exist');
  });

  // find element
  // make assertion
  it('contains a call-to-action to the amazon prime video channel');
});