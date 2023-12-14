describe("user harus bisa login ke sistem", () => {
  it.only("passed", () => {
    cy.visit("http://127.0.0.1:8000/");

    // step 1 : select dulu elemen di html
    cy.get('[data-cy="email"]').type("superadmin@gmail.com");

    cy.get('[data-cy="password"]').type("password");

    cy.get(".btn").click();

    cy.get(".nav-link > .d-sm-none").should("have.text", "Hi, SuperAdmin");
  });

  it("login using invalid email and password", () => {
    cy.visit("http://127.0.0.1:8000/");

    cy.get('[data-cy="email"]').type("superadminGacor@gmail.com");

    cy.get('[data-cy="password"]').type("apaaan");

    cy.get(".btn").click();

    cy.get(".invalid-feedback").should(
      "have.text",
      "These credentials do not match our records."
    );
  });

  it("login using invalid email and correct password", () => {
    cy.visit("http://127.0.0.1:8000/");

    cy.get('[data-cy="email"]').type("superadmin@gmail.com");

    cy.get('[data-cy="password"]').type("passowrd");

    cy.get(".btn").click();

    cy.get(".invalid-feedback").should(
      "have.text",
      "These credentials do not match our records."
    );
  });

  it("login using empty email and correct password", () => {
    cy.visit("http://127.0.0.1:8000/");

    cy.get('[data-cy="password"]').type("passowrd");

    cy.get(".btn").click();

    cy.get(".invalid-feedback").should(
      "have.text",
      "The email field is required."
    );
  });

  it("login using empty password and correct email", () => {
    cy.visit("http://127.0.0.1:8000/");

    cy.get('[data-cy="email"]').type("superadmin@gmail.com");

    cy.get(".btn").click();

    cy.get(".invalid-feedback").should(
      "have.text",
      "The password field is required."
    );
  });

  it("login using unregistered account", () => {
    cy.visit("http://127.0.0.1:8000/");

    cy.get('[data-cy="email"]').type("ghozy@gmail.com");

    cy.get('[data-cy="password"]').type("akumaumakan");

    cy.get(".btn").click();

    cy.get(".invalid-feedback").should(
      "contain",
      "These credentials do not match our records."
    );
  });
});
