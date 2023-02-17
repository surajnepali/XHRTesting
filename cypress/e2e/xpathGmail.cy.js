/// <reference types="cypress" />

describe("Xpath Testing", () => {
    it("visit meropadhai, try to login with 'Login with Google' button", () => {
        cy.visit(Cypress.env('url'))
        cy.xpath('//button[contains(text(),"Login")]').click()
        cy.xpath('/html/body/div[1]/main/div/div/div[1]/div[2]/form/div[3]/div/iframe').click()
        cy.wait(5000)
    })
})