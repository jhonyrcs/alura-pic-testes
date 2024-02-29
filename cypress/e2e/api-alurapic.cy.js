describe('API AluraPic', () => {
      
    it('Fazer login', () => {
        cy.request({
            method: 'POST',
            url: 'https://alurapic-api.onrender.com/user/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(32)
        })
    })

    it('Fotos do usuário', () => {
        cy.request({
            method: 'GET',
            url: 'https://alurapic-api.onrender.com/jhonysantos/photos',  
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Carro de corrida')
        })
    })
  })