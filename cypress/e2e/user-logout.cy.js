describe("login and logout", () => {
  it("user doing login and then logout", () => {
    cy.visit("http://127.0.0.1:8000/");

    cy.get('[data-cy="email"]').type("superadmin@gmail.com");

    cy.get('[data-cy="password"]').type("password");

    cy.get('[data-cy="submit"]').click();

    cy.get('[data-cy="username"]').click();

    cy.get('[data-cy="logout-btn"]').click();
  });
});
