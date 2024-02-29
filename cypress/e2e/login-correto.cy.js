describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })

        it('Verificar credenciais válidas', () => {
            cy.login('jhonysantos', 'qwer123@')
            cy.contains('a', '(Logout)').should('be.visible')
        })
})