describe("Admin create new user", () => {
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
  // positive scenario
  it("admin should create new user", () => {
    cy.visit("http://127.0.0.1:8000/user-management/user");
    cy.get(".card-header-action > .btn-icon").click();
    cy.get("#name").type("GhozyGG");
    cy.get("#email").type("ghozy@gmail.com");
    cy.get("#password").type("12345678");
    cy.get(".btn-primary").click();
    cy.get("p").should("be.visible");
    cy.get("p").should("have.text", "Data Berhasil Ditambahkan");
    cy.get('[data-cy="username"]').click();
    cy.get('[data-cy="logout-btn"]').click();
    /* ==== End Cypress Studio ==== */
  });

  //   Negative scenario
  it("admin create new user but type invalid email", () => {
    cy.visit("http://127.0.0.1:8000/user-management/user");
    cy.get(".card-header-action > .btn-icon").click();
    cy.get("#name").type("GhozyGG");
    cy.get("#email").type("ghozygmail.com");
    cy.get("#password").type("12345678");
    cy.get(".btn-primary").click();
    //
    cy.get(".invalid-feedback").should("be.visible");
    cy.get(".invalid-feedback").should(
      "contain",
      "The email must be a valid email address."
    );
    cy.get('[data-cy="username"]').click();
    cy.get('[data-cy="logout-btn"]').click();
  });

  it("admin create new user but not input email", () => {
    cy.visit("http://127.0.0.1:8000/user-management/user");
    cy.get(".card-header-action > .btn-icon").click();
    cy.get("#name").type("GhozyGG");
    cy.get("#password").type("12345678");
    cy.get(".btn-primary").click();
    //
    cy.get(".invalid-feedback").should("be.visible");
    cy.get(".invalid-feedback").should(
      "contain",
      "The email field is required."
    );
    cy.get('[data-cy="username"]').click();
    cy.get('[data-cy="logout-btn"]').click();
  });

  it("admin create new user but type invalid password", () => {
    cy.visit("http://127.0.0.1:8000/user-management/user");
    cy.get(".card-header-action > .btn-icon").click();
    cy.get("#name").type("GhozyGG");
    cy.get("#email").type("ghozygmail@.com");
    cy.get(".btn-primary").click();
    //
    cy.get(":nth-child(4) > .invalid-feedback").should("be.visible");
    cy.get(":nth-child(4) > .invalid-feedback").should(
      "contain",
      "The password field is required."
    );
    cy.get('[data-cy="username"]').click();
    cy.get('[data-cy="logout-btn"]').click();
  });
});
