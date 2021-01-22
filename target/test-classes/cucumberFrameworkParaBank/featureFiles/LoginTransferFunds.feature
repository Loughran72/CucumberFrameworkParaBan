Feature: Login, Transfer funds

Scenario Outline: Login into account with credentials then transfer funds from one account to another
	Given User navigates to "<url>"  https://parabank.parasoft.com/parabank/
	When User enters "<username>" username
	And User enters "<password>" password 
	When User clicks on Login button 
	Then The user should be displayed with a login alert "<message>"
	When User clicks Transfer Funds button
	And User enters an amount "<amount>"
	And User selects a From account number "<fromSelection>"
	And User selects a to account number "<toSelection>"
	When User clicks TRANSFER button
	Then The user should be displayed with a transfer alert "<transferMessage>"
	
	
	Examples:
	| url 																		| username 	| password	| message						|	amount	|	fromSelection	|	toSelection	|	transferMessage			|
	| https://parabank.parasoft.com/parabank/ | test1234	| test1234 	| Accounts Overview	|	10			|	1							|						2	|	Transfer Completed!	|
	

