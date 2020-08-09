#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@Regression
Feature: CalculateBMI
  Feature to test Calculate BMI

  @Regression
  Scenario: Verify Title
    Given I launch Calculator page
    And verify the page title - "Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science"
    Then I click on BMI Calculator
    And verify the page title - "BMI Calculator"

  @Regression
  Scenario Outline: Calculate BMI
    Given I launch BMI Calculator
    When I enter <Age>, <Height>, <Weight>
    Then I can calculate BMI
    Examples: 
      | Age  | Height | Weight  |
 			|10    |127     |40       |
			|30    |156     |70       |
			|25    |152     |55       |
			|20    |160     |45       |
			|35    |160     |70       |
