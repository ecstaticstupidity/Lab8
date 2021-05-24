# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   

   Answer 1: Within a Github action that runs whenever code is pushed


2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.


    No because to properly test whether a message is sent, you'd have to have test across multiple devices and there are far too many moving parts and sub-features to test to properly unit test.


3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters


    Yes because you would simply have to write tests to see if the application accepts an input of 79 characters, 80 characters, and 81 characters to check that the "max message length" property of the entire messaging feature still holds.
    

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

    The tests will not affect the browser UI so we will not see the Puppeteer actually control the browser.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

    beforeAll(async () => {
        await page.goto('myurl');
        await page.waitForTimeout(500);
        await page.click('[alt = "settings"]);
    }

