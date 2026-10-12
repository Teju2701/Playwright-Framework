import {BasePage} from "../../pages/Basepage"
import {newUserLogin} from '../../pages/NewUserLogin.js'
import {test} from '../../fixture/fixture.js'
import newUserCredentials from '../../testdata/newUserCredentials.json'

test("New user login", async({page,nlp})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    await nlp.NewUserLoginPage(newUserCredentials.PnewUserName,newUserCredentials.PnewUserEmail,newUserCredentials.PnewUserPassword)

})