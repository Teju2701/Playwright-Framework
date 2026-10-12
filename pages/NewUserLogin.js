import {BasePage} from "./Basepage"


export class newUserLogin extends BasePage{

    constructor(page){

        super(page)

        this.page = page

        this.newUrlSignUpLink=page.getByText("New user? Signup",{exact: true})

        this.newUserName = page.getByPlaceholder('Name')

        this.newUserEmail = page.getByPlaceholder('Email')

        this.newUserPassword = page.getByPlaceholder('Password')

    }

    async NewUserLoginPage(PnewUserName,PnewUserEmail,PnewUserPassword){

        //await this.newUserName.fill(PnewUserName)

        await this.Type(this.newUserName,PnewUserName)

        //await this.newUserName.fill(PnewUserEmail)

         await this.Type(this.newUserEmail,PnewUserEmail)

        //await this.newUserName.fill(PnewUserPassword)

        await this.Type(this.newUserPassword,PnewUserPassword)

    }

}