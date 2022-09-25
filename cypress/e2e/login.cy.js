describe("login", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/inventory", {
      fixture: "/sampleInventory.json",
    }).as("inventory");
    cy.intercept("GET", "http://localhost:3001/api/users", {
      fixture: "/sampleUsers.json",
    }).as("users");
    cy.visit("http://localhost:3000/login");
  });

  it("Should have form to login", () => {
    cy.get(".login").should("exist");
    cy.get('input[type="username"]').should("exist");
    cy.get('input[type="password"]').should("exist");

  });

  it("Should be able to login", () => {
    cy.get('input[type="username"]').type("dsJosh");
    cy.get('input[type="password"]').type("dogs");
    cy.get('button[type="button"]').click();
    cy.url().should("be.equal", "http://localhost:3000/dsJosh/closet");
    cy.get(".UserPost").contains("Nike Dunk Low World Champ");
  });

  it("Should be able to log out", () => {
    cy.get('input[type="username"]').type("dsJosh");
    cy.get('input[type="password"]').type("dogs");
    cy.get('button[type="button"]').click();
    cy.url().should("be.equal", "http://localhost:3000/dsJosh/closet");
    cy.get(".nav.logout").click();
    cy.url().should("be.equal", "http://localhost:3000/");
  });
});
