import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage.js'
import {DashboardPage} from '../../pages/DashboardPage.js'
import user from '../../testdata/user.json'


test('login to application', async ({ page }) => 
{

    await page.goto('/login');

    const loginPage = new LoginPage(page);

    console.log(`Test Data Used In This Test ${user.username} and ${user.password}`);
    
    await loginPage.loginToApplication(user.username, user.password);

    const dashboardPage = new DashboardPage(page);

    await dashboardPage.clickOnMenuIcon();

    await dashboardPage.clickOnSignOutButton();


});