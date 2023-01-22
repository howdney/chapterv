const el =  require('./elements').ELEMENTS

const articleName = 'Artigo de testes' + new Date().getTime()

class Articles {
    
    // Fluxo de criação do artigo
    // acesso ao formuladio
    acessarFormulario() {
        cy.get(el.linkNovoArtigo).click()
    }

    // preencher o formulário
    preencherOFormulario() {
        cy.get(el.inputTitle).type(articleName)
        cy.get(el.inputDescrition).type('Esta é uma história em quadrinhos')
        cy.get(el.inputBody).type('Um dia, foi organizado uma viagem para um acampamento bem legal. Nesse acampamento havia vários tipos de diversões, como andar a cavalo, brincar nos pedalinhos e tirolesa.')
        cy.get(el.inputTags).type('acampamento')

    }
    
    // submeter o formulário
    submeterFormulario() {
        cy.contains('button','Publish Article'). click()

    }
    
     // verificar como o artigo foi criado
    verficarSeOArtigoFoiCriado(){
        cy.contains(articleName).should('be.visible')
        cy.get('h1').should('have.text', articleName)
    }

}

export default new Articles()

