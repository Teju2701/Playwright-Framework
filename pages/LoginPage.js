

export class LoginPage {

    
        constructor(page) 
        {
            this.page = page;

            this.usernameField = page.getByPlaceholder("Enter Email")

            this.passwordField = page.getByPlaceholder("Enter Password")

            this.loginButton = page.getByText("Sign in",{exact: true})

            this.newUrlSignUpLink=page.getByText("New user? Signup",{exact: true})

            this.errorMessage = page.locator(".errorMessage")

        }

        async loginToApplication(username, password) 
        {
            await this.usernameField.fill(username);
            await this.passwordField.fill(password);
            await this.loginButton.click();
        }

        async clickOnNewUserSignUpLink() 
        {
            await this.newUrlSignUpLink.click();
        }

        async getErrorMessage() 
        {
            return await this.errorMessage.textContent();
        }

}

