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

            cy.get('.error').contains('Wrong credentials')
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

            //luodaan listalle valmiiksi yksi blogi
            cy.contains('Add new blog').click()
            cy.get('#title').type('Eka blogi')
            cy.get('#author').type('Iida Peltonen')
            cy.get('#url').type('www.eka.com')
            cy.get('#likes').type('50')
            cy.get('#submit').click()

        })

        it('A blog can be created', function () {
            cy.contains('Add new blog').click()
            cy.get('#title').type('Cypress-testi')
            cy.get('#author').type('Iida Peltonen')
            cy.get('#url').type('www.cypress-testi.com')
            cy.get('#likes').type('2')
            cy.get('#submit').click()

            cy.get('.error').contains('New blog Cypress-testi added')
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

            cy.get('.error').contains('New blog Cypress-testi added')
            cy.contains('www.cypress-testi.com')

            //tykätään juuri lisätystä blogista
            cy.contains('Like this blog').click()

            cy.get('.error').contains('Like added')
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

            //kirjaudutaan ulos, jotta poisto-nappi saadaan nökyviin
            cy.contains('Logout').click()
            //takaisin sisä'n
            cy.contains('Login').click()
            cy.get('#username').type('Iida')
            cy.get('#Password').type('salasana')
            cy.get('#login').click()

            cy.contains('Logged in as Iida')

            cy.contains('www.cypress-testi.com')
            //koska käyttäjä on sama kuin blogin lisääjä, deleten pitäisi näkyä
            cy.contains('Delete')

            cy.contains('Delete').click()
        })
        //blogien järjestely
        it.only('Bloglist is in the right order', function () {
            //logataan ulos, jotta saadaan lisättyä uusi
            cy.contains('Logout').click()
            //takaisin sisään
            cy.contains('Login').click()
            cy.get('#username').type('Iida')
            cy.get('#Password').type('salasana')
            cy.get('#login').click()

            //lisätään blogi
            cy.contains('Add new blog').click()
            cy.get('#title').type('Cypress-testi')
            cy.get('#author').type('Iida Peltonen')
            cy.get('#url').type('www.cypress-testi.com')
            cy.get('#likes').type('2')
            cy.get('#submit').click()

            //logataan ulos, jotta saadaan lisättyä kolmas
            cy.contains('Logout').click()
            //takaisin sisään
            cy.contains('Login').click()
            cy.get('#username').type('Iida')
            cy.get('#Password').type('salasana')
            cy.get('#login').click()

            //lisätään blogi
            cy.contains('Add new blog').click()
            cy.get('#title').type('Kolmas lisätty blogi')
            cy.get('#author').type('Erkki Junkkarinen')
            cy.get('#url').type('www.erkki.com')
            cy.get('#likes').type('12')
            cy.get('#submit').click()

            //ulos, jotta saadaan rivit nökymään oikein
            cy.contains('Logout').click()

            //takaisin sisään
            cy.contains('Login').click()
            cy.get('#username').type('Iida')
            cy.get('#Password').type('salasana')
            cy.get('#login').click()

            //tarkistetaan järjestys
            cy.get('.title').eq(0).should('contain', 'Eka blogi')
            cy.get('.title').eq(2).should('contain', 'Cypress-testi')
        })
    })
})
