import setInitialCookies from "../src/utils";

describe('Search page', () => {
  before(() => {
    setInitialCookies();
		cy.visit('/search');
	});

  it('contains a search bar', () => {
    cy.get('[data-testid="search-modal-input"]').should('exist');
  });

  it('displays content related to Radiohead when search submitted', () => {    
    cy
      .get('[data-testid="searchModal-artists"]')
      .find('a[href="/artists/radiohead"]')
      .should('exist');
  });
});