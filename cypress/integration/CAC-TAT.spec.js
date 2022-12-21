/// .<reference types="Cypress". />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy. visit('./src/index.html')  
    }) 

    it('verifica o título da aplicação', function() {
       cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })
    
    it.only('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste'
        cy.get('#firstName').type('Rodolfo')
        cy.get('#lastName').type('Richard')
        cy.get('#email').type('rodolfo@teste.com')
        cy.get('#open-text-area').type(longText)
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
  })
  