Feature: TodoMVC task management

  @smoke
  Scenario: User adds a new todo item
    Given I open the TodoMVC app
    When I add "Learn Cypress BDD"
    Then I should see "Learn Cypress BDD" in the todo list

  @regression
  Scenario: User adds multiple todo items
    Given I open the TodoMVC app
    When I add "Learn Cypress"
    And I add "Learn BDD"
    And I add "Build framework"
    Then I should see 3 todo items

  @smoke @regression
  Scenario: User marks a todo as completed
    Given I open the TodoMVC app
    When I add "Finish test"
    And I mark "Finish test" as completed
    Then "Finish test" should be marked as completed

  @regression
  Scenario: User deletes a todo item
    Given I open the TodoMVC app
    When I add "Task to delete"
    And I delete "Task to delete"
    Then I should not see "Task to delete" in the todo list

  @regression
  Scenario: User filters completed todos
    Given I open the TodoMVC app
    When I add "Active task"
    And I add "Completed task"
    And I mark "Completed task" as completed
    And I filter by "Completed"
    Then I should see "Completed task" in the todo list
    And I should not see "Active task" in the todo list