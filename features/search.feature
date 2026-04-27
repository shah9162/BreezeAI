Feature: Search Use Case Library

  Background:
    Given user navigates to the use case library page

  @smoke @search
  Scenario Outline: Search with multiple keywords
    When user searches for "<keyword>"
    Then filtered use case cards should be displayed
     
  Examples:
  | keyword |
  | sales   |
  | ai      |
  | outreach|

  @search
  Scenario Outline: Search with no results
    When user searches for "<keyword>"
    Then no use case cards should be displayed

    Examples:
  | keyword           |
  | xyz123            |
  | invalid-search    |

  @search
  Scenario: Clear search input
    Given user searches for "sales"
    When user clears the search input
    Then default use case cards should be displayed