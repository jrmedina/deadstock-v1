describe("Error Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/inventory", {
      fixture: "/sampleInventory.json",
    }).as("inventory");
    cy.intercept("GET", "http://localhost:3001/api/users", {
      fixture: "/sampleUsers.json",
    }).as("users");
    cy.visit("http://localhost:3000");
  });
    it("should render a message and way back home for a bad URL", () => {
      cy.visit("http://localhost:3000/dog");
      cy.get("main").contains("Something went wrong.");
      cy.get(".home-button").click();
      cy.url().should("be.equal", "http://localhost:3000/");
    });

});
