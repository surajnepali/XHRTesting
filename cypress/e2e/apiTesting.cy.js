/// <reference types="cypress" />

const categoryName = 'automation category';
const delCategoryName = 'mew category';


describe('Ecommerce API Testing', () => {
  describe('Admin', () => {
    describe('Category', () => {

      describe('{categoryName}', () => {

        describe('head-category', () => {

          it('should get all head categories of category', () => {
            cy.api({
              method: 'GET',
              url: Cypress.env('api_url_admin') + '/category/' + categoryName + '/head-category/',
            }).then((response) => {
              expect(response.status).to.eq(200);
            });
          })

          it('should add head category to category', () => {
            cy.api({
              method: 'POST',
              url: Cypress.env('api_url_admin') + '/category/' + categoryName + '/head-category/',
              body: {
                name: 'men',
              },
            }).then((response) => {
              expect(response.status).to.eq(201);
            });
          })
        })

        it('should get category details by name', () => {
          cy.api({
            method: 'GET',
            url: Cypress.env('api_url_admin') + '/category/' + categoryName,
          }).then((response) => {
            expect(response.status).to.eq(200);
          });
        })

        it('should delete category by name', () => {
          cy.api({
            method: 'DELETE',
            url: Cypress.env('api_url_admin') + '/category/' + delCategoryName,
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message', 'Deleted');
          });
        })

      })

      it('should get all category', () => {
        cy.api({
          method: 'GET',
          url: Cypress.env('api_url_admin') + '/category/',
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });

      // it('should add new category', () => {
      //   cy.api({
      //     method: 'POST',
      //     url: Cypress.env('api_url_admin') + '/category/',
      //     body: {
      //       name: 'Dii Category',
      //     },
      //   }).then((response) => {
      //     expect(response.status).to.eq(200);
      //   });
      // })

      it('should get all categories with their head categories', () => {
        cy.api({
          method: 'GET',
          url: Cypress.env('api_url_admin') + '/category/all/',
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      })
      
    });
  });
});
