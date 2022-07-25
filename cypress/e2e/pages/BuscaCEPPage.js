
/// <reference types="Cypress" />

import BuscaCEPPageElements from '../elements/BuscaCEPPageElements'
const buscaCEPPageElements = new BuscaCEPPageElements

class BuscaCEPPage {

    visualizeAddressByZIPCode(Address) {
        cy.get(buscaCEPPageElements.zipCodeCompleteAddress()).should('contain', Address)
    }

}

export default BuscaCEPPage;