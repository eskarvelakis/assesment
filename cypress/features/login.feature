Feature: Login Functionality

  Background: Login
    Given user opens login page

  @happypath @PM
  Scenario Outline: User authenticates with different credentials <username> / <pass>

    When user fills username: "<username>" and password: "<pass>"
    Then user is on "<page>" page

    Examples:
      | username | pass        | page                   |
      | student  | Password123 | Logged In Successfully |
      | student2 | 1234        | Test Login             |
