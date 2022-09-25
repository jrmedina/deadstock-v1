describe("App", () => {
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

  it("should contain details fo the shoe and seller", () => {
    cy.get(".details").should(
      "contain",
      `Colors: White / Metallic Gold / Black`
    );
    cy.get(".details").should("contain", `Size: 6.5`);
    cy.get(".details").should("contain", `Brand: Nike`);
    cy.get(".details").should("contain", `Release Date: 09/02/2022`);
    cy.get(".details").should("contain", `Quantity: 1`);
    cy.get(".details").should("contain", `SKU: DR9511 100`);
    cy.get(".details").should("contain", `Seller: dsJosh`);
    cy.get(".details").should("contain", `Price: $123.00 USD`);
  });

  it("should have a way to send offer", () => {
    cy.get("h4").should("contain", "Interested? Let's send dsJosh an email");
    cy.get(".copy-btn").click();
    cy.window()
    .then((win) => {
      win.navigator.clipboard.readText().then((text) => {
        expect(text).to.contain("dsJosh@gmail.com");
      });
    });
  });
});
