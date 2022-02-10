import setInitialCookies from "../src/utils";

describe('Home page', () => {
  before(() => {
    setInitialCookies();
		cy.visit('/');

    cy.scrollTo('bottom');
	});

  it('contains a navigation menu', () => {
    cy.get('[data-testid="mainNav"]')
      .should('exist');
  })

  // find element
  // type fake email address
  // submit form
  // make assertion
  it('allows users to subscribe to the mailing list');
});