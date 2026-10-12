import { test as base } from "@playwright/test"
import {LoginPage} from '../pages/LoginPage.js'
import {dashboard} from "../pages/DashboardPage.js"
import { newUserLogin } from '../pages/NewUserLogin.js'



export const test= base.extend({

    loginPage: async({page},use) =>{

        console.log("Inside loginPage fixture");

        const loginPage = new LoginPage(page)
        
        await use(loginPage)
    },

    dashboardPage: async({page},use)=>{

    console.log("Inside dashboardPage fixture");

    const dashboardPage = new dashboard(page)
        
    await use(dashboardPage)

    },

    nlp: async({page},use)=>{

    console.log("Inside newuserloginpage fixture");  

    const nw = new newUserLogin(page)

    await use(nw)

    }


});

export { expect} from "@playwright/test"
