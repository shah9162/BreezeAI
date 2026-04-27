Feature: Use Case Navigation

  Background:
    Given user navigates to the use case library page

  @smoke @navigation
  Scenario: Clicking a use case card should open detail page in new tab
    When user clicks on the first use case card
    Then a new tab should be opened
    And the new tab URL should be different from the current page
    And the new tab URL should contain a valid use case slug