describe("membuka halaman login", () => {
  it("pass", () => {
    cy.visit("http://127.0.0.1:8000/login");
  });
});
