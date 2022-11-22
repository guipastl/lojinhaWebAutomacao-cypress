Cypress.Commands.add('fazerLoginAcessarPaginaAdicaoProduto', () => {
    cy.visit('http://165.227.93.41/lojinha-web/v2/')
    cy.get('#usuario').focus().type('admin')
    cy.get('#senha').focus().type('admin')
    cy.get('.btn').click()
    cy.get('.waves-effect').click()
})