describe("Details View", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/inventory", {
      fixture: "/sampleInventory.json",
    }).as("inventory");
    cy.intercept("GET", "http://localhost:3001/api/users", {
      fixture: "/sampleUsers.json",
    }).as("users");
    cy.visit("http://localhost:3000");
    cy.get(".slide.active").click();
  });

  it("Should contain details for the shoe and seller", () => {
    cy.get(".details").should("contain", `Colors: WhiteMetallic GoldBlack`);
    cy.get(".details").should("contain", `Size: 6.5`);
    cy.get(".details").should("contain", `Brand: Nike`);
    cy.get(".details").should("contain", `Release Date: 09/02/2022`);
    cy.get(".details").should("contain", `Quantity: 1`);
    cy.get(".details").should("contain", `SKU: DR9511 100`);
    cy.get(".details").should("contain", `Seller: dsJosh`);
    cy.get(".details").should("contain", `Price: $123.00 USD`);
  });

  it("Should have a way to send offer", () => {
    cy.get("h4").should("contain", "Interested? Let's send dsJosh an offer").click();
    cy.get(".subject").type("Deadstock shoes");
    cy.get(".name").type("Bob");
    cy.get(".email").type("codedbyjosh@gmail.com");
    cy.get(".amount").type("123");
  });
});
