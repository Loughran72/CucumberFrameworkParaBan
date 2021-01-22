Feature: Login, Open a new account

Scenario Outline: Login into account with credentials then open a new account
	Given User navigates to "<url>"  https://parabank.parasoft.com/parabank/
	When User enters "<username>" username
	And User enters "<password>" password 
	When User clicks on Login button 
	Then The user should be displayed with a login alert "<message>"
	When User clicks on the Open New Account button
	And User selects an "<option>" from the drop down
	And User selects a "<number>" from the drop down
	When User clicks Create New Account button
	Then The user should be displayed with an account created alert "<newAccountMessage>"
	
	
	Examples:
	| url 																		| username 	| password	| message						|	option		|	number	|	newAccountMessage	|
	| https://parabank.parasoft.com/parabank/ | test1234	| test1234 	| Accounts Overview	|	CHECKING	|	1				|	Account Opened!		|
	

