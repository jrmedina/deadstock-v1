describe("Details View", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/inventory/5", {
      fixture: "/samplePair.json",
    }).as("pair");

    cy.visit("http://localhost:3000/inventory/5");
  });

  it("Should contain details for the shoe and seller", () => {

    cy.get(".details").should("contain", `Color(s): WHITE, METALLIC GOLD, BLACK`);
    cy.get(".details").should("contain", `Size: 6.5`);
    cy.get(".details").should("contain", `Brand: Nike`);
    cy.get(".details").should("contain", `Release Date: 09/02/2022`);
    cy.get(".details").should("contain", `Quantity: 1`);
    cy.get(".details").should("contain", `SKU: DR9511 100`);
    cy.get(".details").should("contain", `Seller: dsJosh`);
    cy.get(".details").should("contain", `Price: $123.00 USD`);
  });

  it("Should have a way to send offer", () => {
    cy.get("h4")
      .should("contain", "Interested? Let's send dsJosh an offer")
      .click();
    cy.get(".subject").type("Deadstock shoes");
    cy.get(".name").type("Bob");
    cy.get(".email").type("codedbyjosh@gmail.com");
    cy.get(".amount").type("123");
  });
});
