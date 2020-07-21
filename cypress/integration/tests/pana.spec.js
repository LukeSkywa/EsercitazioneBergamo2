/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
    })
    let baseUrl = "http://localhost:3000/";
    it('Login', () => {
        cy.get('#sava input').type('LukeSkywa').should('have.value', 'LukeSkywa')
        cy.get('#angie input').type('asd')

        cy.server();
        cy.route('GET', baseUrl + 'users?username=LukeSkywa').as('LoginCall');
        cy.get('#loggalo').click()
        cy.wait('@LoginCall').then((response) => { cy.get('#belli').should('have.text', 'MyTodosApp') });

        cy.get('#goToTodo').click();
        cy.get('#todoHomeTitle').should('have.text', 'I miei TODO')



    })
})