describe("User Dashboard", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/inventory", {
      fixture: "/sampleInventory.json",
    }).as("GET");

    cy.intercept("POST", "http://localhost:3001/api/dsJosh/closet", {
      fixture: "/sampleUsers.json",
    }).as("POST");

    cy.intercept("PUT", `http://localhost:3001/api/inventory/2`, {
      fixture: "/v2.json",
    }).as("PUT");

    cy.intercept("DELETE", `http://localhost:3001/api/inventory/2`, {
      fixture: "/v2.json",
    }).as("DELETE");

    cy.visit("http://localhost:3000/");
    cy.get(".nav.login").click();
    cy.get('input[type="username"]').type("dsJosh");
    cy.get('input[type="password"]').type("dogs");
    cy.get('button[type="button"]').click();
  });

  it("Should be able to EDIT an existing post", () => {
    cy.get('[testid="edit"]').first().click();
    cy.get('[testid="quantity"]').first().click().type(3);
    cy.get('[testid="price"]').first().click().type(300);
    cy.get('[testid="save"]').click();
    cy.get(".UserPost").contains("SAVED!");
  });

  it("Should be able to DELETE an existing post", () => {
        cy.get(".UserPost").should("have.length", 2)
    cy.get(".delete-btn").first().click();
      cy.get(".UserPost").should("have.length", 1);
  });

  it("Should let the user know if they do not have any shoes in their inventory", () => {
    cy.get(".delete-btn").click({ multiple: true });

    cy.get("h2").should("contain", "Looks like we need to add some shoes...");
  });

  it("Should be able to ADD a new post", () => {
    cy.get(".add-btn").click();
    cy.get('input[name="title"]').type("Crimson Tint Air Jordan 1");
    cy.get('input[name="size"]').type(9.5);
    cy.get('input[name="brand"]').type("Jordan");
    cy.get('input[name="code"]').type("123-abc");
    cy.get('input[name="price"]').type(250);
    cy.get('input[name="colors"]').type("Pink");
    cy.get(".save-btn").click();
    cy.get(".status").should("contain", "SAVED!");


  });
});
