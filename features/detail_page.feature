Feature: Use Case Detail Page

  Background:
    Given user navigates to the use case library page
    When user clicks on the first use case card

  @smoke @detail
  Scenario: Validate use case detail page structure
    Then the detail page should be loaded successfully
    And the hero section should be visible
    And the floating CTA section should be visible
    And the testimonials section should be visible
    And the stepper section should be visible
    And the full width CTA section should be visible
    And related use cases section should be visible
    And Go Deeper section should be visible
    And Go Deeper section should have at least one card
    And only three related use case cards should be displayed