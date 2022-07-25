const { Given, When, And, Then } = require("@badeball/cypress-cucumber-preprocessor");

import CorreiosHomePage from './pages/CorreiosHomePage'
import BuscaCEPPage from './pages/BuscaCEPPage'

const correiosHomePage = new CorreiosHomePage
const buscaCEPPage = new BuscaCEPPage

Given("I visit the post office website", () => {
    correiosHomePage.accessCorreiosHomePage();
});

When("I click in the ZIP code search box", () => {
    correiosHomePage.clickSearchZipCodeBar();
});

And("Insert the {string} code", (zipCode) => {
    correiosHomePage.insertZipCode(zipCode);
});

And("Click in search button", () => {
    correiosHomePage.clickSearchZipCodeButton();
});

Then("I should see the result page with the {string}", (Address) => {
    buscaCEPPage.visualizeAddressByZIPCode(Address);
});