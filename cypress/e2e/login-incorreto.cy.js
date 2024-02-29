describe('Página de login', () =>{
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

        cy.intercept('POST', 'https://alurapic-api.onrender.com/user/login', {
            statusCode: 400
        }).as('stubPost')
    })

        it('Verificar mensagem de campos obrigatórios', () => {
            cy.contains('User name is required!').should('be.visible')
            cy.contains('Password is required!').should('be.visible')
        })

        it('Verificar credenciais inválidas', () => {
            cy.login('jhonyInvalido', 'qwer1234')
            cy.wait('@stubPost')
            cy.on('window:alert', (message) => {
                expect(message).to.equal('Invalid user name or password')
            })
        })
})