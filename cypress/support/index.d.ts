declare namespace Cypress{
    interface Chainable{
        /**
         * @examle cy.login()
         */
        login(): void

        /**
         * @example cy.token()
         */
        token(): void
        
    }
}