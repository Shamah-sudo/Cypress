class loginPage{
    visit(){
        cy.visit('https://www.saucedemo.com/');
    }
    getUsernameField(){
        return cy.get('#user-name');
    }
    getPasswordField(){
        return cy.get('#password');
    }
    getLoginButton(){
        return cy.get('#login-button');
    }
    getErrorMessage(){
        return cy.get('h3[data-test="error"]');
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
export default loginPage;