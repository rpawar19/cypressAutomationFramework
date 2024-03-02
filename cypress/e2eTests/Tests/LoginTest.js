import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../Pages/LoginPage";

Given("I navigate to the Website", async function () {
  login.enterURL();
});

Given("I entered valid credential", async function (datatable) {
  datatable.hashes().forEach((element) => {
    login.enterUserNamePassword(element.email, element.validpassword);
    login.clickSubmitButton();
  });
});

When("User click on sign in button", async function () {
  login.clickSubmitButton();
});

Then("Validate the title after login", async function () {
  login.verifyPageTitle();
});
