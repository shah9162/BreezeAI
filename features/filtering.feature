Feature: Use Case Filtering

  Background:
    Given user navigates to the use case library page

  @smoke @filter
  Scenario Outline: Apply persona filter
    When user selects persona "<persona>"
    Then the URL should contain "<expected>"
    And filtered use case cards should be displayed

    Examples:
  | persona   | expected   |
  | Marketing | marketing  |
  | Sales     | sales      |
  | Service   | service    |

  @regression @filter
  Scenario Outline: Apply readiness filter
    When user selects readiness "<readiness>"
    Then the URL should contain "<expected>"
    And filtered use case cards should be displayed

    Examples:
  | readiness  | expected             |
  | Emerging   | maturity=emerging    |
  | Established| maturity=established |

  @regression @filter
  Scenario Outline: Apply combined filters
    When user selects persona "<persona>"
    And user selects readiness "<readiness>"
    Then the URL should contain "<personaExpected>"
    And the URL should contain "<readinessExpected>"
    And filtered use case cards should be displayed

    Examples:
  | persona   | readiness   | personaExpected | readinessExpected      |
  | Marketing | Emerging    | marketing       | maturity=emerging      |
  | Sales     | Established | sales           | maturity=established   |

  @regression @filter
  Scenario: Clear applied filters
    Given user has applied persona "Marketing"
    When user clears all filters
    Then the URL should not contain "marketing"
    And default use case cards should be displayed