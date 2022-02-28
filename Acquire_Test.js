//This project is created to complete the following task on Acquire website:
//Scenario 1: Log into agent dashboard. Navigate to settings
//on the left navigation panel. Account Settings -> Users,
//Roles and Skills -> Create User. This scenario should also
//validate required fields.


context('Acquire_Test', () => {

  //Go to Acquire login page 
    beforeEach(() => {
      cy.visit('https://accounts.uat.env.acquire.io/login?endpoint=account&return=&account=lo4h4a')
    })


  it('Begin Test Scenario One', () => {
    
    //Enter username/password and login
    cy.get('[id=usernameOrEmail]').type('zemux@inboxbear.com');

    cy.get('[id=password]').type('Hereisanew1!');

    cy.get('button[type=submit]').click();

    //Wait for the page to load by checking to see if title is loaded
    cy.title().should('eq', 'Acquire Admin Dashboard — Acquire Admin');

    //Get to Create User page
    cy.get('a[href="/settings"]').click();

    //Wait for the page to load by checking to see if title is loaded
    cy.title().should('eq', 'Web Widget Integration Setting — Acquire Admin');

    //Get to Create User page
    cy.contains('Account Settings').click();

    cy.contains('Users, Roles, and Skills').click();

    cy.contains('Create User').click();

    //Enter Country first so Save button shows up and we can verify the required fields
    cy.get('*[class="col-md-6 col-sm-12 col-xs-12 country-select"]').click();

    cy.contains('United States').click();

    cy.contains('Save').click();

    //Warning message only shows up for the required fields so checking if these exists
    cy.get('*[class="col-md-6 col-sm-12 col-xs-12 user-name-column"]').contains('Unfortunately, you can’t leave this blank.');

    cy.get('*[class="col-md-6 col-sm-12 col-xs-12 user-email-column"]').contains('Unfortunately, you can’t leave this blank.');

    cy.get('*[class="col-md-6 col-sm-12 col-xs-12 password"]').contains('Password must contain at least 1 lower case,1 upper case,1 number & 1 special character.');

    cy.get('*[class="col-md-6 col-sm-12 col-xs-12 confirm-password"]').contains('Password must contain at least 1 lower case,1 upper case,1 number & 1 special character.');

    cy.get('*[class="col-md-12 col-sm-12 col-xs-12 add-edit-role"]').contains('Please assign any role');

    //After all the warning message validation, we start to create the test user
    cy.get('[id=name]').type('Test');

    cy.get('[id=email]').type('test@test.com');

    cy.get('[id=password]').type('Acquiretest1!');

    cy.get('[id=passwordRepeat]').type('Acquiretest1!');

    cy.get('*[class="col-md-12 col-sm-12 col-xs-12 add-edit-role"]').click();

    cy.contains('Operator').click();

    cy.contains('Save').click();

  })
})