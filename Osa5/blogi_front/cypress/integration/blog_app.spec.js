describe('Blog app', function() {
    beforeEach(function() {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        //create user
        const user = {
            name: 'Matti Luukkainen',
            username: 'mluukkai',
            password: 'salainen'
        }
        cy.request('POST', 'http://localhost:3000/api/users/', user)
        cy.visit('http://localhost:3000')
    })

    it('Login form is shown', function() {
        cy.visit('http://localhost:3000')
        cy.contains('BLOGS')
        cy.contains('Username')
    })
    describe('Login',function() {
        it.only('succeeds with correct credentials', function() {
            cy.contains('Login').click()
            cy.get('#Username').type('mluukkai')
            cy.get('#Password').type('salainen')
            cy.get('#login').click()

            cy.contains('Logged in as mluukkai')
        })

        it('fails with wrong credentials', function() {
            cy.contains('Login').click()
            cy.get('#Username').type('mluukkai')
            cy.get('#Password').type('wrong')
            cy.get('#login').click()

            cy.contains('Wrong credentials')
        })
    })
})


