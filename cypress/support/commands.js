Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-test="loginUserName"]').type(username);
    cy.get('[data-test="loginPassword"]').type(password);
    cy.contains('button', 'login').click();
  });