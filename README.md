# AcquireTest
Scenario 1: Log into agent dashboard. Navigate to settings on the left navigation panel. Account Settings -> Users, Roles and Skills -> Create User. This scenario should also validate required fields.

This test is done using Cypress.

Here is full installation steps:

1. Download Node.js and install it: https://nodejs.org/en/download/
2. Download VS Code and install it: https://code.visualstudio.com/download
3. Open VS Code and open up the Terminal
4. Type "npm install cypress --save-dev" to install Cypress
5. Once the install is done, type "node_modules/.bin/cypress open" and verify that the Cypress Window opens up
6. Now Download Acquire_Test.js file and put it into the folder where your cypress tests are stored such as: \cypress\integration
7. Now Go back to VS Code and repeat step 5, you should see the test you added in step 6 show up
8. Click on the test and you should be able to run the test without issue

Improvements if given more time:

1. I will create a list of global functions and variables that can be reused in different tests
2. I will create a clean up after the test is done to restore everything back to initial stage
3. I will create a data sheet that contains user name/email...etc that can be reused for different tests
