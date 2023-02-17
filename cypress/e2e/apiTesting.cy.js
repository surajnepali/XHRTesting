describe('XHR Testing', () => {
  it('visit meropadhai WebApp, sign in, and XHR Testing', () => {
    cy.visit(Cypress.env('url'))
    cy.get('button[class="chakra-button css-1cvkl7w"]').contains('Login').click()
    cy.xpath('//input[@name="email"]').type(Cypress.env('email'))
    cy.xpath('//input[@name="password"]').type(Cypress.env('password'))
    cy.get('button[class="chakra-button css-gq8yyc"]').click()
    cy.get('h1[class="chakra-heading title css-1i706zd"]')
      .should('have.text', 'On your markGet set Learn!')

    // cy.intercept({
    //   method: 'GET',
    //   url: Cypress.env.('api_url_courseList'),
    // }, {
    //   statusCode: 200,
    //   body: [{ 
    //     "_id": "63466f58924aa3addcb700c5",
    //     "name": "Micro-Economics",
    //     "faculty": "Management Studies",
    //     "university": "Tribhuwan University",
    //     "image": "https://meropadhai-prod.sgp1.digitaloceanspaces.com/course/2022-12-16T10-26-04-973Zblob",
    //     "rating": 8.5,
    //     "studentsEnrolled": 115,
    //     "discount": {
    //       "isPercent": false,
    //       "amount": 500
    //     },
    //     "price": {
    //       "show": 699,
    //       "buy": 199
    //     }
    //   }]

    // }).as('getCourse')

    cy.intercept('GET', Cypress.env('api_url_course'), (req) => {
      req.reply({
        statusCode: 200,
        body: [{
          "_id": "63466f58924aa3addcb700c5",
          "name": "Micro-Economics",
          "faculty": "Management Studies",
          "university": "Tribhuwan University",
          "image": "https://meropadhai-prod.sgp1.digitaloceanspaces.com/course/2022-12-16T10-26-04-973Zblob",
          "rating": 8.5,
          "studentsEnrolled": 115,
          "discount": {
            "isPercent": false,
            "amount": 500
          },
          "price": {
            "show": 699,
            "buy": 199
          }
        }]
      })
    }).as('getCourse')

    cy.xpath('//button[contains(text(),"Explore Courses")]').click({ force: true })
    cy.wait('@getCourse')
    cy.wait(5000)
  })

})