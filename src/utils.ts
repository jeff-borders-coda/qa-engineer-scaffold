export function setInitialCookies() {
	cy.setCookie('userAcceptedCookies', 'true');
	cy.setCookie('awaitingUserCookieResponse', 'false');
}
