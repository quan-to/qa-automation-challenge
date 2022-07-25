
/// <reference types="Cypress" />

import CorreiosHomePageElements from '../elements/CorreiosHomePageElements'
const correiosHomePageElements = new CorreiosHomePageElements

const url = Cypress.config("baseUrl")

class CorreiosHomePage {
    
    accessCorreiosHomePage() {
        cy.visit(url,{ timeout: 30000 } )
        cy.get(correiosHomePageElements.closeCookiesButton()).click()
    }

    clickSearchZipCodeBar() {
        //aparentemente quando aceita os cookies a imagem do chatbot fecha também, então esse trecho segue comentado
        //cy.get(correiosHomePageElements.websiteHelperCloseButton()).click()
        cy.get(correiosHomePageElements.searchZIPCodeBar()).click()
    }

    insertZipCode(zipCode) {
        cy.get(correiosHomePageElements.searchZIPCodeBar()).type(zipCode)
    }

    clickSearchZipCodeButton(){
        /*
        Manobra para abrir a nova pagina na mesma aba do chrome
        foi preciso atualizar o atributo target do form dentro 
        da página e só depois disso clicar na lupa.
        */
        cy.get(correiosHomePageElements.zipCodeSeachForm()).then($el => {
            expect($el).to.have.attr('target','_blank')
            $el.attr('target', '_self')
         })
        
         cy.get(correiosHomePageElements.zipCodeSearchButton()).click()
    }
}

export default CorreiosHomePage;