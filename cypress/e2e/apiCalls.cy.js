describe("Stubbed API Calls", () => {
  it("Should return inventory", () => {
    cy.intercept("GET", "http://localhost:3001", {
      fixture: "/sampleData.json",
    }).as("sampleData");

    cy.visit("http://localhost:3000")
      .wait("@sampleData")
      .its("response.body.inventory")
      .should("have.length", 25);
  });
  it("Should return users", () => {
    cy.intercept("GET", "http://localhost:3001/api/users", {
      fixture: "/sampleData.json",
    }).as("sampleData");

    cy.visit("http://localhost:3000")
      .wait("@sampleData")
      .its("response.body.users")
      .should("deep.equal", {
        username: "deadstockuser1",
        password: "cheese",
      });
  });
});
