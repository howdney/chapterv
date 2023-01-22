/// <reference types="cypress" />

describe('Cadastro', () => {
    it('Cadstro com sucesso', () => {
        
        cy.intercept({
            // hostname = https://api.realworld.io/api/articles
            // path     = /api/users
            // POST
            method: 'POST',
            path: '/api/users'

        }, {
            
            statusCode: 200,
            fixture: 'cadastro-com-sucesso'

        }).as('postUsers')

        
        cy.visit('register')
        cy.get('input[placeholder=Username]').type('chaptervcleb')
        cy.get('input[placeholder=Email]').type('chaptervcleb@mail.com')
        cy.get('input[placeholder=Password]').type('002120')
        cy.get('button.btn-primary').click()

        
    });

    it('Cadastro com usuário já existente', () => {
        
        cy.intercept({
            method: 'POST',
            path: '/api/users'
        }, {
            statusCode: 422,
            fixture: 'cadastro-usuario-existente.json'


        }).as('postUsers')
        
        cy.visit('register')
        cy.get('input[placeholder=Username]').type('chaptervcleb')
        cy.get('input[placeholder=Email]').type('chaptervcleb@mail.com')
        cy.get('input[placeholder=Password]').type('002120')
        cy.get('button.btn-primary').click()

        cy.contains('"username has already been taken').should('be.visible')

    });
});