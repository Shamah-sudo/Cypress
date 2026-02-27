import LoginPage from './pages/LoginPage';

describe('Login tests',() =>{
    const loginPage = new LoginPage();
    beforeEach(() => {
        loginPage.visit();
    })
    it('should login successfully with valid credentials',() =>{
        loginPage.login('standard_user',"secret_sauce");

        //Assertion-successful login
        cy.url().should('include','/inventory');
    })
    it('should display error message with invalid credentials',() =>{
        loginPage.login('standard_user','s428dkjs@#');

        //Assertion-failed login
        loginPage.getErrorMessage()
            .should('be.visible')
            .and('contain','Username and password do not match any user in this service');

    })
    it('should show error message when username is empty', () =>{
        loginPage.enterPassword('secret_sauce');
        loginPage.clickLogin();
       
        //Assertion-error message for empty user-name
        loginPage.getErrorMessage()
            .should('be.visible')
            .and('contain','Username is required');
    })
    it('should show error message when username is locked_out-user',() =>{
        loginPage.login('locked_out_user','secret_sauce');

        //Assertion-error message for locked_out-user
        loginPage.getErrorMessage()
            .should('be.visible')
            .and('contain','Sorry, this user has been locked out.');
    })
    it('should login successfully with problem_user credentials', () => {
        loginPage.login('problem_user','secret_sauce');

        //Assertion-successful login for problem_user
        cy.url().should('include','/inventory');
    })

})