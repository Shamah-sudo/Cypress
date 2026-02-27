class LoginPage{
    visit(){
        cy.visit('https://www.saucedemo.com/');
    }
    getUsernameField(){
        return cy.get('#username');
    }
    getPasswordField(){
        return cy.get('#password');
    }
    getLoginButton(){
        return cy.get('button[type="submit"]');
    }
    getErrorMessage(){
        return cy.get('[data-test="error"]');
    }
    enterUsername(username){
        this.getUsernameField().type(username);
    }
    enterPassword(password){
        this.getPasswordField().type(password);
    }
    clickLogin(){
        this.getLoginButton().click();
    }
    login(username, password){
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }
}
export default LoginPage;