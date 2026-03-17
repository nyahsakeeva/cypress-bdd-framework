# Cypress BDD Automation Framework

## Overview

This project is a Behavior-Driven Development (BDD) test automation framework built using Cypress and Cucumber.

It demonstrates how to design scalable UI test automation using:

* Feature files (Gherkin syntax)
* Step definitions
* Page Object Model (POM)
* Reusable test structure

The framework is implemented against the TodoMVC React application.

---

## Tech Stack

* Cypress
* Cucumber Preprocessor (@badeball)
* JavaScript (Node.js)
* ESBuild (bundler)

---

## Project Structure

```
cypress/
  e2e/
    features/
      todo.feature

  support/
    step_definitions/
      todoSteps.js
    e2e.js

  pages/
    todoPage.js

cypress.config.js
package.json
```

---

## Key Concepts

### BDD (Behavior Driven Development)

Tests are written in plain English using Gherkin syntax:

* Given (preconditions)
* When (actions)
* Then (expected results)

### Page Object Model (POM)

UI interactions are separated into page classes:

* Improves maintainability
* Reduces duplication
* Keeps tests readable

### Step Definitions

Connect feature files to actual Cypress commands.

---

## Installation

```bash
npm install
```

---

## Run Tests

### Open Cypress Test Runner

```bash
npx cypress open
```

### Run in Headless Mode

```bash
npx cypress run
```

---

## Configuration

Main configuration is defined in:

```
cypress.config.js
```

Key settings:

* baseUrl → target application
* specPattern → feature file location
* setupNodeEvents → cucumber + bundler integration

---



