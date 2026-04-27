Feature: Deep Linking for Use Case Library

  @regression @deep-link
  Scenario Outline: Load page with persona filter from URL
    Given user navigates directly to persona filtered URL "<persona>"
    Then the URL should contain "<persona>"
    And filtered use case cards should be displayed

    Examples:
  | persona   |
  | marketing |
  | sales     |

  @regression @deep-link
  Scenario Outline: Load page with readiness filter from URL
    Given user navigates directly to readiness filtered URL "<readiness>"
    Then the URL should contain "maturity=<readiness>"
    And filtered use case cards should be displayed

  Examples:
  | readiness   |
  | emerging    |
  | established | 

  @regression @deep-link
  Scenario Outline: Load page with combined filters from URL
    Given user navigates directly to persona "<persona>" and readiness "<readiness>"
    Then the URL should contain "<persona>"
    And the URL should contain "maturity=<readiness>"
    And filtered use case cards should be displayed

    Examples:
  | persona   | readiness   |
  | marketing | emerging    |
  | sales     | established |