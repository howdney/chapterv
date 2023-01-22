/// <reference types="cypress" />

import articles from '../support/pages/articles'

describe('Articles', () => {

    // HOOK -> trechos que pode ser executados antes ou depois do teste
    beforeEach(()=>{

        cy.login()

        cy.visit('/')

    });

    it('Cadastro de novo artigo com sucesso', () => {
        
        // Fluxo de criação do artigo
        // acesso ao formuladio
        articles.acessarFormulario()
        
        // preencher o formulário
        articles.preencherOFormulario()
        
        // submeter o formulário
        articles.submeterFormulario()
        
         // verificar como o artigo foi criado
        articles.verficarSeOArtigoFoiCriado()
    });
});