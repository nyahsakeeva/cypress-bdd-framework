class TodoPage {
  visit() {
    cy.visit("/");
  }

  todoInput() {
    return cy.get(".new-todo");
  }

  todoItems() {
    return cy.get(".todo-list li");
  }

  addTodo(todoName) {
    this.todoInput().type(`${todoName}{enter}`);
  }

  validateTodoVisible(todoName) {
    cy.contains(".todo-list li", todoName).should("be.visible");
  }

  validateTodoNotVisible(todoName) {
    cy.contains(".todo-list li", todoName).should("not.exist");
  }

  validateTodoCount(count) {
    this.todoItems().should("have.length", count);
  }

  markTodoCompleted(todoName) {
    cy.contains(".todo-list li", todoName)
      .find('.toggle')
      .check();
  }

  validateTodoCompleted(todoName) {
    cy.contains(".todo-list li", todoName)
      .should("have.class", "completed");
  }

  deleteTodo(todoName) {
    cy.contains(".todo-list li", todoName)
      .trigger("mouseover")
      .find(".destroy")
      .invoke("show")
      .click({ force: true });
  }

  filterBy(filterName) {
    cy.contains(".filters a", filterName).click();
  }
}

module.exports = new TodoPage();