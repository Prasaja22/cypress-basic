describe("show new user seeder", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8000/");

    cy.exec(
      "cd ../cypess-app-demo/demo-app-cypress-automation && php artisan migrate:fresh --seed"
    );
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-cy="email"]').clear("superadmin@gmail.com");
    cy.get('[data-cy="email"]').type("superadmin@gmail.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="submit"]').click();
  });

  it("show new user seeder", () => {
    cy.visit("http://127.0.0.1:8000/user-management/user");

    cy.get(".table td")
      .contains("user")
      .parent()
      .find("a")
      .contains("Edit")
      .click();

    cy.get("#name").type("Ghozy");
    cy.get("#email").clear();
    cy.get("#email").type("ghozy@gmail.com");
    cy.get(".btn-primary").click();
  });
});
