describe('Testes Web do Modulo de Produtos', () => {
    beforeEach(() => cy.visit('http://165.227.93.41/lojinha-web/v2/'))

    it('Nao e permitido registrar um produto com valor igual a zero', () => {
        cy.fazerLoginAcessarPaginaAdicaoProduto()
        cy.get('#produtonome').focus().type('XBox One')
        cy.get('#produtovalor').focus().type('000')
        cy.get('#produtocores').focus().type('branco, verde')
        cy.get('button.btn').click()
        cy.get('.toast').should('be.visible').and('have.text', 'O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00')
    })

    it('Nao e permitido registrar um produto com valor maior que 7.000,00', () => {
        cy.fazerLoginAcessarPaginaAdicaoProduto()
        cy.get('#produtonome').focus().type('XBox One')
        cy.get('#produtovalor').focus().type('700001')
        cy.get('#produtocores').focus().type('branco, verde')
        cy.get('button.btn').click()
        cy.get('.toast').should('be.visible').and('have.text', 'O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00')
    })

    it('Posso adicionar produtos que estejam no limite de 0,01', () => {
        cy.fazerLoginAcessarPaginaAdicaoProduto()
        cy.get('#produtonome').focus().type('XBox One')
        cy.get('#produtovalor').focus().type('001')
        cy.get('#produtocores').focus().type('branco, verde')
        cy.get('button.btn').click()
        cy.get('.toast').should('be.visible').and('have.text', 'Produto adicionado com sucesso')
    })

    it('Posso adicionar produtos que estejam no limite de 7.000,00', () => {
        cy.fazerLoginAcessarPaginaAdicaoProduto()
        cy.get('#produtonome').focus().type('XBox One')
        cy.get('#produtovalor').focus().type('700000')
        cy.get('#produtocores').focus().type('branco, verde')
        cy.get('button.btn').click()
        cy.get('.toast').should('be.visible').and('have.text', 'Produto adicionado com sucesso')
    })
})