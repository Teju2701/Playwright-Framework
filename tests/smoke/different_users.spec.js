// Test to check different_user login functionality

import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage.js";
import multiuser from "../../testdata/allUsers.json";



for (const user of multiuser) 
{
  test(`login to application ${user.id}`, async ({ page }) => 
    {
        await page.goto("/login");

        const loginPage = new LoginPage(page);

        console.log(`Logging in with user: ${user.username} ${user.password} ${user.message}`);

        await loginPage.loginToApplication(user.username, user.password);

        expect(await loginPage.getErrorMessage()).toBe(user.message);
  });
}
