describe("User Dashboard", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/inventory", {
      fixture: "/sampleInventory.json",
    }).as("inventory");
    cy.intercept("GET", "http://localhost:3001/api/users", {
      fixture: "/sampleUsers.json",
    }).as("users");

    cy.intercept("POST", "http://localhost:3001/api/inventory").as("post");

    cy.visit("http://localhost:3000/login");
    cy.get('input[type="username"]').type("dsJosh");
    cy.get('input[type="password"]').type("dogs");
    cy.get('button[type="button"]').click();
  });

  it("Should be able to EDIT an existing post", () => {
    cy.get('[testid="edit"]').click();
    cy.get('[testid="quantity"]').click().type(3);
    cy.get('[testid="price"]').click().type(300);
    cy.get('[testid="save"]').click();
    cy.get(".UserPost").contains("SAVED!");
    cy.get(".nav.home").click();
    cy.get(".slide.active").click();
    cy.get(".details").find("p").last().should("contain", "Price: $300 USD");
  });

  it("Should be able to DELETE an existing post", () => {
    cy.get(".UserPost").contains("Nike Dunk Low World Champ");
    cy.get(".delete-btn").click();
  });

  it("Should let the user know if they do not have any shoes in their inventory", () => {
    cy.get(".UserPost").contains("Nike Dunk Low World Champ");
    cy.get(".delete-btn").click();
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
    // cy.get(".save-btn").click();
    // cy.get(".status").should("contain", "SAVED!");

  //   cy.wait("@post").then(({ response }) => {
  //     console.log(response);
  //        expect(response.statusCode).to.eq(200);
  //     expect(response.body.brand).to.eq("Jordan");
  //     expect(response.body.colors).to.deep.eq(["Pink"]);
  //   });
  //   cy.get(".nav.closet").click();
  //   cy.get(".UserPost").first().should("contain", "Crimson Tint Air Jordan 1");
  //   cy.get(".UserPost").first().should("contain", "9.5");
  });
});
