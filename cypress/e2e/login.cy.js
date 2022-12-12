describe("Login User Flow", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/inventory", {
      fixture: "/sampleInventory.json",
    }).as("inventory");

    cy.intercept("POST", "http://localhost:3001/api/dsJosh/closet", {
      fixture: "/sampleUsers.json",
    }).as("login");

    cy.visit("http://localhost:3000/login");
  });

  it("Should have form to login", () => {
    cy.get(".login").should("exist");
    cy.get('input[type="username"]').should("exist");
    cy.get('input[type="password"]').should("exist");
  });

  it("Should have log in details for a visitor", () => {
    cy.get("p.login-message").should(
      "contain",
      "username: dsUser password: shoes"
    );
  });

  it("Should be able to login", () => {
    cy.get('input[type="username"]').type("dsJosh");
    cy.get('input[type="password"]').type("dogs");
    cy.get('button[type="button"]').click();
    cy.url().should("be.equal", "http://localhost:3000/dsJosh/closet");
    cy.get(".UserPost").contains("NikeCraft General Purpose Shoe");
  });

  it("Should be able to log out", () => {
    cy.get('input[type="username"]').type("dsJosh");
    cy.get('input[type="password"]').type("dogs");
    cy.get('button[type="button"]').click();
    cy.url().should("be.equal", "http://localhost:3000/dsJosh/closet");
    cy.get(".nav.logout").click();
    cy.url().should("be.equal", "http://localhost:3000/");
  });

  it("Should not allow a user to login if username or password input is empty", () => {
    cy.get(".general-button").should("be.disabled");
    cy.get('input[type="username"]').type("dsJosh");
    cy.get(".general-button").should("be.disabled");
    cy.get('input[type="password"]').type("dogs");
    cy.get(".general-button").should("not.be.disabled");
  });
});
