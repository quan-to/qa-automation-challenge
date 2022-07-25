const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("I Call the webservice passing the {string} code I should see the {string}", (zipCode,Address) => {
    cy.request('https://viacep.com.br/ws/'+zipCode+'/json/').its('body').its('logradouro').should('contain', Address)
})
/*
When("I Call the webservice passing the {string} code", (zipCode) => {
    resultBody = cy.request('https://viacep.com.br/ws/'+zipCode+'/json/')
});

Then("The result should contain the {string} in the result", (Address) => {
    resultBody.toString().should('contain', Address)
});
*/