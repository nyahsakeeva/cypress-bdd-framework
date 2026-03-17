const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

const todoPage = require("../../pages/todoPage");

Given("I open the TodoMVC app", () => {
  todoPage.visit();
});

When("I add {string}", (todoName) => {
  todoPage.addTodo(todoName);
});

When("I mark {string} as completed", (todoName) => {
  todoPage.markTodoCompleted(todoName);
});

When("I delete {string}", (todoName) => {
  todoPage.deleteTodo(todoName);
});

When("I filter by {string}", (filterName) => {
  todoPage.filterBy(filterName);
});

Then("I should see {string} in the todo list", (todoName) => {
  todoPage.validateTodoVisible(todoName);
});

Then("I should not see {string} in the todo list", (todoName) => {
  todoPage.validateTodoNotVisible(todoName);
});

Then("I should see {int} todo items", (count) => {
  todoPage.validateTodoCount(count);
});

Then("{string} should be marked as completed", (todoName) => {
  todoPage.validateTodoCompleted(todoName);
});