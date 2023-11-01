describe("admin delete the user account", () => {
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

  it("admin delete the user account correctly", () => {
    cy.visit("http://127.0.0.1:8000/user-management/user");

    cy.get(".table td")
      .contains("user")
      .parent()
      .find("button")
      .contains("Delete")
      .click();

    cy.get(":nth-child(2) > .swal-button").click();
    cy.get(".alert").should("be.visible");
    cy.get("p").should("contain", "User Deleted Successfully");
  });

  it.only("admin delete the user account but decide to cancel it", () => {
    cy.visit("http://127.0.0.1:8000/user-management/user");

    cy.get(".table td").contains("user").parent().find("button").click();
    cy.get(":nth-child(1) > .swal-button").click();
  });
});
