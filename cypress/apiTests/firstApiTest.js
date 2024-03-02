describe("template spec", () => {
  it.only("passes", () => {
    //Getting response from BrowserStack demo website
    cy.request("GET", "https://www.bstackdemo.com/").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("APITest1", () => {
    cy.request("GET", "https://reqres.in/api/users?page=2").then(
      (response1) => {
        cy.log(response1.body);
        // cy.log(JSON.stringify(response1.body));
      }
    );
  });
  it("API Test - Post Method", () => {});
});
