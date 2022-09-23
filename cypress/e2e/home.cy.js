
describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  
  it("should render a navbar on load", () => {
    cy.get(".NavBar")
      .contains("DEADSTOCK")
  });
})