import LoginPage from '/../pages/LoginPage';
describe('Login tests',() =>{
    const loginPage = new LoginPage;
    beforeEach(() => {
        LoginPage.visit();
    })
    it('should login successfully with valid credentials',() =>{
        loginPage.login('standard_user',"secret_sauce");

        //Assertion-successful login
        cy.url().should('include','/inventory');
    })
    it('should display error message with invalid credentials',() =>{
        LoginPage.login('standard_user','s428dkjs@#');

        //Assertion-failed login
        loginPage.getErrorMessage()
            .should('be.visible')
            .and('contain','Username and password do not match any user in this service');

    })

})