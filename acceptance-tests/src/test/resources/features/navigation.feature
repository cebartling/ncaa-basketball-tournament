Feature: Navigate through the NCAA basketball tournament site

  Background:
    Given I navigate to the website


  Scenario: Navigate to the first round of the tournament
    When I click the "First round" navigation pill link
    Then I should see the first round brackets

  Scenario: Navigate to the second round of the tournament
    When I click the "Second round" navigation pill link
    Then I should see the second round brackets

  Scenario: Navigate to the third round of the tournament
    When I click the "Third round" navigation pill link
    Then I should see the third round brackets

