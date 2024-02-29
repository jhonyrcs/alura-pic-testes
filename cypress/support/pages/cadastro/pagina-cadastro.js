const el = require('./elements').ELEMENTS;

class Cadastro {
    
    acessarPaginaDeCadastro(){
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
        cy.get(el.registerNow).click()
    }

    preencherFormulario(){
        cy.get(el.email).type('jhony.santos@gmail.com')
        cy.get(el.fullName).type('Jhony Santos')
        cy.get(el.registerUserName).type('jhonysantos')
        cy.get(el.registerPassword).type('qwer123@')
    }

    submeterFormulario(){
        cy.get(el.btnRegister).click()
    }
}

export default new Cadastro();