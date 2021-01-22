Feature: Create Account

Scenario Outline: Create User Account
	Given User navigates to "<url>"  https://parabank.parasoft.com/parabank/
	When User clicks Register button
	And User enters first name "<fName>"
	And User enters last name "<lName>"
	And User enters Address "<address>"
	And User enters City "<city>"
	And User enters State "<state>"
	And User enters Zip Code "<zip-code>"
	And User enters phone for account "<phone>"
	And User enters SSN "<SSN>"
	And User enters userName "<userName>"
	And User enters password for account "<pwd>"
	And User enters password to confirm "<pwd>"
	When User clicks on Register button 
	Then The user should be displayed with an account created notification "<notification>"
		
	
	Examples:
	| url 																		| fName | lName	| address |	city	|	state	|	zip-code	|	phone						|	SSN				|	userName	|	pwd				|	notification		|
	| https://parabank.parasoft.com/parabank/ | test	| 1234 	|	street	|	city	|	TN		|	12345			| (555)-555-5555	|	123456789	|	test1234	|	test1234	|	User Registered	|
	