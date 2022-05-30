describe('Blog app', function () {
    beforeEach(function () {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        //create user
        const user = {
            name: 'Iida Peltonen',
            username: 'Iida',
            password: 'salasana'
        }
        cy.request('POST', 'http://localhost:3000/api/users/', user)
        cy.visit('http://localhost:3000')
    })

    it('Login form is shown', function () {
        cy.visit('http://localhost:3000')
        cy.contains('BLOGS')
        cy.contains('username')
    })
    describe('Login', function () {
        it('succeeds with correct credentials', function () {
            cy.contains('Login').click()
            cy.get('#username').type('Iida')
            cy.get('#Password').type('salasana')
            cy.get('#login').click()

            cy.contains('Logged in as Iida')
        })

        it('fails with wrong credentials', function () {
            cy.contains('Login').click()
            cy.get('#username').type('Iida')
            cy.get('#Password').type('wrong')
            cy.get('#login').click()

            cy.contains('Wrong credentials')
        })
    })
    describe('When logged in', function () {
        beforeEach(function () {
            // log in user here
            cy.contains('Login').click()
            cy.get('#username').type('Iida')
            cy.get('#Password').type('salasana')
            cy.get('#login').click()

            cy.contains('Logged in as Iida')
        })

        it('A blog can be created', function () {
            cy.contains('Add new blog').click()
            cy.get('#title').type('Cypress-testi')
            cy.get('#author').type('Iida Peltonen')
            cy.get('#url').type('www.cypress-testi.com')
            cy.get('#likes').type('2')
            cy.get('#submit').click()

            cy.contains('New blog Cypress-testi added')
            cy.contains('www.cypress-testi.com')
        })

        it('A blog can be liked', function () {
            //lisätään blogi
            cy.contains('Add new blog').click()
            cy.get('#title').type('Cypress-testi')
            cy.get('#author').type('Iida Peltonen')
            cy.get('#url').type('www.cypress-testi.com')
            cy.get('#likes').type('2')
            cy.get('#submit').click()

            cy.contains('New blog Cypress-testi added')
            cy.contains('www.cypress-testi.com')

            //tykätään juuri lisätystä blogista
            cy.contains('Like this blog').click()

            cy.contains('Like added')
            cy.contains('Cypress-testi')
            cy.contains('3')

        })

        //oman poisto
        it('A blog can be removed', function () {
            //lisätään blogi
            cy.contains('Add new blog').click()
            cy.get('#title').type('Cypress-testi')
            cy.get('#author').type('Iida Peltonen')
            cy.get('#url').type('www.cypress-testi.com')
            cy.get('#likes').type('2')
            cy.get('#submit').click()

            cy.contains('New blog Cypress-testi added')
            cy.contains('www.cypress-testi.com')
            cy.contains('Delete')

            //poistetaan juuri lisätty blogi
            cy.contains('Delete').click()


        })
    })
})
