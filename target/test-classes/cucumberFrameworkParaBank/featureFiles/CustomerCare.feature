Feature: Customer Care feature

Scenario Outline: Fill out Customer Care form
	Given User navigates to "<url>"  https://parabank.parasoft.com/parabank/
	When User clicks Customer Care button
	And User enters name "<name>"
	And User enters email "<email>"
	And User enters phone "<phone>"
	And User enters message "<message>"
	When User clicks on Send button 
	Then The user should be displayed with a notification "<notification>"
		
	
	Examples:
	| url 																		| name 			| email								| phone						|	message				|	notification		|
	| https://parabank.parasoft.com/parabank/ | test1234	| test1234@test.com 	| (555)-555-5555	|	Hello There.	|	General Kenobi!	|
	