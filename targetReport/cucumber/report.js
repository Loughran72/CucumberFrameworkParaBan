$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account",
  "description": "",
  "id": "create-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create User Account",
  "description": "",
  "id": "create-account;create-user-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"\u003curl\u003e\"  https://parabank.parasoft.com/parabank/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks Register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters first name \"\u003cfName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters last name \"\u003clName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters Address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters City \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters State \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters Zip Code \"\u003czip-code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters phone for account \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters SSN \"\u003cSSN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters userName \"\u003cuserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters password for account \"\u003cpwd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters password to confirm \"\u003cpwd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "The user should be displayed with an account created notification \"\u003cnotification\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "create-account;create-user-account;",
  "rows": [
    {
      "cells": [
        "url",
        "fName",
        "lName",
        "address",
        "city",
        "state",
        "zip-code",
        "phone",
        "SSN",
        "userName",
        "pwd",
        "notification"
      ],
      "line": 22,
      "id": "create-account;create-user-account;;1"
    },
    {
      "cells": [
        "https://parabank.parasoft.com/parabank/",
        "test",
        "1234",
        "street",
        "city",
        "TN",
        "12345",
        "(555)-555-5555",
        "123456789",
        "test1234",
        "test1234",
        "User Registered"
      ],
      "line": 23,
      "id": "create-account;create-user-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6437416612,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Create User Account",
  "description": "",
  "id": "create-account;create-user-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"https://parabank.parasoft.com/parabank/\"  https://parabank.parasoft.com/parabank/",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks Register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters first name \"test\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters last name \"1234\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters Address \"street\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters City \"city\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters State \"TN\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters Zip Code \"12345\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters phone for account \"(555)-555-5555\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters SSN \"123456789\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters userName \"test1234\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters password for account \"test1234\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters password to confirm \"test1234\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "The user should be displayed with an account created notification \"User Registered\"",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://parabank.parasoft.com/parabank/",
      "offset": 19
    }
  ],
  "location": "LoginSteps.user_navigates_to_https_parabank_parasoft_com_parabank(String)"
});
formatter.result({
  "duration": 1557166790,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_Register_button()"
});
formatter.result({
  "duration": 2515776110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 24
    }
  ],
  "location": "LoginSteps.user_enters_first_name(String)"
});
formatter.result({
  "duration": 2133925231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 23
    }
  ],
  "location": "LoginSteps.user_enters_last_name(String)"
});
formatter.result({
  "duration": 159323481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "street",
      "offset": 21
    }
  ],
  "location": "LoginSteps.user_enters_Address(String)"
});
formatter.result({
  "duration": 141189599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "city",
      "offset": 18
    }
  ],
  "location": "LoginSteps.user_enters_City(String)"
});
formatter.result({
  "duration": 140168016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TN",
      "offset": 19
    }
  ],
  "location": "LoginSteps.user_enters_State(String)"
});
formatter.result({
  "duration": 147294621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 22
    }
  ],
  "location": "LoginSteps.user_enters_Zip_Code(String)"
});
formatter.result({
  "duration": 144172242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(555)-555-5555",
      "offset": 31
    }
  ],
  "location": "LoginSteps.user_enters_phone_for_account(String)"
});
formatter.result({
  "duration": 178743816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456789",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_enters_SSN(String)"
});
formatter.result({
  "duration": 183238701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 22
    }
  ],
  "location": "LoginSteps.user_enters_userName(String)"
});
formatter.result({
  "duration": 188795038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 34
    }
  ],
  "location": "LoginSteps.user_enters_password_for_account(String)"
});
formatter.result({
  "duration": 235252972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 33
    }
  ],
  "location": "LoginSteps.user_enters_password_to_confirm(String)"
});
formatter.result({
  "duration": 195241114,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 2470047653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User Registered",
      "offset": 67
    }
  ],
  "location": "LoginSteps.the_user_should_be_displayed_with_an_account_created_notification(String)"
});
formatter.result({
  "duration": 2000277896,
  "status": "passed"
});
formatter.uri("CustomerCare.feature");
formatter.feature({
  "line": 1,
  "name": "Customer Care feature",
  "description": "",
  "id": "customer-care-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Fill out Customer Care form",
  "description": "",
  "id": "customer-care-feature;fill-out-customer-care-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"\u003curl\u003e\"  https://parabank.parasoft.com/parabank/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks Customer Care button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters name \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters phone \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters message \"\u003cmessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Send button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The user should be displayed with a notification \"\u003cnotification\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "customer-care-feature;fill-out-customer-care-form;",
  "rows": [
    {
      "cells": [
        "url",
        "name",
        "email",
        "phone",
        "message",
        "notification"
      ],
      "line": 15,
      "id": "customer-care-feature;fill-out-customer-care-form;;1"
    },
    {
      "cells": [
        "https://parabank.parasoft.com/parabank/",
        "test1234",
        "test1234@test.com",
        "(555)-555-5555",
        "Hello There.",
        "General Kenobi!"
      ],
      "line": 16,
      "id": "customer-care-feature;fill-out-customer-care-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4346416803,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Fill out Customer Care form",
  "description": "",
  "id": "customer-care-feature;fill-out-customer-care-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"https://parabank.parasoft.com/parabank/\"  https://parabank.parasoft.com/parabank/",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicks Customer Care button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters name \"test1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters email \"test1234@test.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters phone \"(555)-555-5555\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters message \"Hello There.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Send button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "The user should be displayed with a notification \"General Kenobi!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://parabank.parasoft.com/parabank/",
      "offset": 19
    }
  ],
  "location": "LoginSteps.user_navigates_to_https_parabank_parasoft_com_parabank(String)"
});
formatter.result({
  "duration": 1202698115,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_Customer_Care_button()"
});
formatter.result({
  "duration": 524394037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 18
    }
  ],
  "location": "LoginSteps.user_enters_name(String)"
});
formatter.result({
  "duration": 2114223447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234@test.com",
      "offset": 19
    }
  ],
  "location": "LoginSteps.user_enters_email(String)"
});
formatter.result({
  "duration": 128864685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "(555)-555-5555",
      "offset": 19
    }
  ],
  "location": "LoginSteps.user_enters_phone(String)"
});
formatter.result({
  "duration": 144525138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello There.",
      "offset": 21
    }
  ],
  "location": "LoginSteps.user_enters_message(String)"
});
formatter.result({
  "duration": 132279961,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Send_button()"
});
formatter.result({
  "duration": 2565767742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "General Kenobi!",
      "offset": 50
    }
  ],
  "location": "LoginSteps.the_user_should_be_displayed_with_a_notification(String)"
});
formatter.result({
  "duration": 1999636052,
  "status": "passed"
});
formatter.uri("LoginNewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Login, Open a new account",
  "description": "",
  "id": "login,-open-a-new-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login into account with credentials then open a new account",
  "description": "",
  "id": "login,-open-a-new-account;login-into-account-with-credentials-then-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"\u003curl\u003e\"  https://parabank.parasoft.com/parabank/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters \"\u003cusername\u003e\" username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user should be displayed with a login alert \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the Open New Account button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User selects an \"\u003coption\u003e\" from the drop down",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User selects a \"\u003cnumber\u003e\" from the drop down",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks Create New Account button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The user should be displayed with an account created alert \"\u003cnewAccountMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login,-open-a-new-account;login-into-account-with-credentials-then-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message",
        "option",
        "number",
        "newAccountMessage"
      ],
      "line": 17,
      "id": "login,-open-a-new-account;login-into-account-with-credentials-then-open-a-new-account;;1"
    },
    {
      "cells": [
        "https://parabank.parasoft.com/parabank/",
        "test1234",
        "test1234",
        "Accounts Overview",
        "CHECKING",
        "1",
        "Account Opened!"
      ],
      "line": 18,
      "id": "login,-open-a-new-account;login-into-account-with-credentials-then-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4488281010,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login into account with credentials then open a new account",
  "description": "",
  "id": "login,-open-a-new-account;login-into-account-with-credentials-then-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"https://parabank.parasoft.com/parabank/\"  https://parabank.parasoft.com/parabank/",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters \"test1234\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"test1234\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user should be displayed with a login alert \"Accounts Overview\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on the Open New Account button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User selects an \"CHECKING\" from the drop down",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User selects a \"1\" from the drop down",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks Create New Account button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The user should be displayed with an account created alert \"Account Opened!\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://parabank.parasoft.com/parabank/",
      "offset": 19
    }
  ],
  "location": "LoginSteps.user_navigates_to_https_parabank_parasoft_com_parabank(String)"
});
formatter.result({
  "duration": 1234382574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 226335439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 231090456,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 835025445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Overview",
      "offset": 49
    }
  ],
  "location": "LoginSteps.the_user_should_be_displayed_with_a_login_alert(String)"
});
formatter.result({
  "duration": 585003,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_Open_New_Account_button()"
});
formatter.result({
  "duration": 462416177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CHECKING",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_selects_an_from_the_drop_down(String)"
});
formatter.result({
  "duration": 2202339692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_selects_a_from_the_drop_down(int)"
});
formatter.result({
  "duration": 2265517557,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_Create_New_Account_button()"
});
formatter.result({
  "duration": 2137176690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Opened!",
      "offset": 60
    }
  ],
  "location": "LoginSteps.the_user_should_be_displayed_with_an_account_created_alert(String)"
});
formatter.result({
  "duration": 2000692371,
  "status": "passed"
});
formatter.uri("LoginTransferFunds.feature");
formatter.feature({
  "line": 1,
  "name": "Login, Transfer funds",
  "description": "",
  "id": "login,-transfer-funds",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login into account with credentials then transfer funds from one account to another",
  "description": "",
  "id": "login,-transfer-funds;login-into-account-with-credentials-then-transfer-funds-from-one-account-to-another",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"\u003curl\u003e\"  https://parabank.parasoft.com/parabank/",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters \"\u003cusername\u003e\" username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user should be displayed with a login alert \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks Transfer Funds button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters an amount \"\u003camount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User selects a From account number \"\u003cfromSelection\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User selects a to account number \"\u003ctoSelection\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks TRANSFER button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The user should be displayed with a transfer alert \"\u003ctransferMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login,-transfer-funds;login-into-account-with-credentials-then-transfer-funds-from-one-account-to-another;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message",
        "amount",
        "fromSelection",
        "toSelection",
        "transferMessage"
      ],
      "line": 18,
      "id": "login,-transfer-funds;login-into-account-with-credentials-then-transfer-funds-from-one-account-to-another;;1"
    },
    {
      "cells": [
        "https://parabank.parasoft.com/parabank/",
        "test1234",
        "test1234",
        "Accounts Overview",
        "10",
        "1",
        "2",
        "Transfer Completed!"
      ],
      "line": 19,
      "id": "login,-transfer-funds;login-into-account-with-credentials-then-transfer-funds-from-one-account-to-another;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4113168312,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login into account with credentials then transfer funds from one account to another",
  "description": "",
  "id": "login,-transfer-funds;login-into-account-with-credentials-then-transfer-funds-from-one-account-to-another;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"https://parabank.parasoft.com/parabank/\"  https://parabank.parasoft.com/parabank/",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters \"test1234\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"test1234\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user should be displayed with a login alert \"Accounts Overview\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks Transfer Funds button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters an amount \"10\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User selects a From account number \"1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User selects a to account number \"2\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks TRANSFER button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The user should be displayed with a transfer alert \"Transfer Completed!\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://parabank.parasoft.com/parabank/",
      "offset": 19
    }
  ],
  "location": "LoginSteps.user_navigates_to_https_parabank_parasoft_com_parabank(String)"
});
formatter.result({
  "duration": 1286326186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_username(String)"
});
formatter.result({
  "duration": 160790329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test1234",
      "offset": 13
    }
  ],
  "location": "LoginSteps.user_enters_password(String)"
});
formatter.result({
  "duration": 127806391,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 783318280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Overview",
      "offset": 49
    }
  ],
  "location": "LoginSteps.the_user_should_be_displayed_with_a_login_alert(String)"
});
formatter.result({
  "duration": 170921,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_Transfer_Funds_button()"
});
formatter.result({
  "duration": 632171803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 23
    }
  ],
  "location": "LoginSteps.user_enters_an_amount(int)"
});
formatter.result({
  "duration": 2108908691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 36
    }
  ],
  "location": "LoginSteps.user_selects_a_From_account_number(int)"
});
formatter.result({
  "duration": 241699443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    }
  ],
  "location": "LoginSteps.user_selects_a_to_account_number(int)"
});
formatter.result({
  "duration": 199397314,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_TRANSFER_button()"
});
formatter.result({
  "duration": 128584027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transfer Completed!",
      "offset": 52
    }
  ],
  "location": "LoginSteps.the_user_should_be_displayed_with_a_transfer_alert(String)"
});
formatter.result({
  "duration": 2000617765,
  "status": "passed"
});
});