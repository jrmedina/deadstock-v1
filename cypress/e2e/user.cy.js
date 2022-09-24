describe("login", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/inventory", {
      fixture: "/sampleInventory.json",
    }).as("inventory");
    cy.intercept("GET", "http://localhost:3001/api/users", {
      fixture: "/sampleUsers.json",
    }).as("users");
    cy.visit("http://localhost:3000/login");
    cy.get('input[type="username"]').type("deadstockuser1");
    cy.get('input[type="password"]').type("cheese");
    cy.get('button[type="button"]').click();
  });

  it("Should be able to EDIT an existing post", () => {
    cy.get('[testid="edit"]').click();
    cy.get(".edit").first().type(12);
    cy.get(".edit").last().type(3);
    cy.get('[testid="save"]').click();
    cy.get(".UserPost").contains("SAVED!");
    cy.get(".nav.home").click();
    cy.get(".miniSize").contains("Size: 12");
  });

  it("Should be able to DELETE an existing post", () => {
    cy.get(".UserPost").contains("Union x Air Jordan 1 Black Toe");
    cy.get('[testid="delete"]').click();
    cy.get(".nav.closet").click();
  });

  it("Should be able to create a new post", () => {

    
  })
});
