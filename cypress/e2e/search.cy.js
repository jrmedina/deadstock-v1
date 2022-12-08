describe("search", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/inventory", {
      fixture: "/sampleInventory.json",
    }).as("inventory");
    cy.intercept("GET", "http://localhost:3001/api/users", {
      fixture: "/sampleUsers.json",
    }).as("users");
    cy.visit("http://localhost:3000/");
  });

  it("Should be able to filter/search inventory by brand no matter text case", () => {
    cy.get('input[type="text"]').click({ force: true }).type("joRDan");
    cy.get(".SearchContainer").should(
      "contain",
      "Union x Air Jordan 1 Black Toe"
    );
  });

  it("Should be able to filter/search inventory by color no matter text case", () => {
    cy.get('input[type="text"]').click({ force: true }).type("arGoN");
    cy.get(".MiniPost").click();
    cy.get(".details").should("contain", "Colors: LIGHT BLUEARGONWHITE");
  });

  it("Should be able to filter/search inventory by name no matter text case", () => {
    cy.get('input[type="text"]').click({ force: true }).type("Champ");
    cy.get(".MiniPost").click();
    cy.get("h1.el-title").should("contain", "Nike Dunk Low World Champ");
  });



  it("Should inform the user if there are no matching results", () => {
    cy.get('input[type="text"]').click({ force: true }).type("qwerty");
    cy.get("h2").should("contain", "no matching results!");
  });
});
