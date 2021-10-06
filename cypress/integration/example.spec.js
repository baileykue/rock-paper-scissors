
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains a body', ()=>{
            cy.get('body').should('be.visible');
        });
    });
});