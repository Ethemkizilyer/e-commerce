
describe("my app", () => {

  it("can select/add products to the cart and then checkout", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="ert"]').should("contain", "Mens Cotton Jacket");
    it("should navigate to detail page on click", () => {
      cy.get(".col-md-4.cursor-pointer").click();
      cy.url().should("include", "/detail/" + item.id);
      cy.get('[role="button"]', { name: /added to cart!/i });
      cy.get('[role="button"]', { name: /go back/i });
      cy.get('[role="button"]', { name: /checkout/i }).click();
      cy.get(/total \(gbp\)/i).should("be.visible");
    });
    
  });
});
