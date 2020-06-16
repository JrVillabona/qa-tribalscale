# Excercise 1

## Bugs Report

**Bug:** #1

**Title:**

**Context:**

**Steps to reproduce it:**

1. Go to: https://qainterview.pythonanywhere.com/
2.
3.

**Expected Result:**

**Actual Result:**

**Tested On:**
MacBook Pro (15-inch)
_Google Chrome (Version 83.0.4103.97)_
_Mozilla Firefox (Version 76.0.1)_
_Safari (Version 13.1.1)_
**Evidence:**
[Desktop](https://nodejs.org/es/)

**Bug:** #2

**Title:**

**Context:**

**Steps to reproduce it:**

1. Go to: https://qainterview.pythonanywhere.com/
2.
3.

**Expected Result:**

**Actual Result:**

**Tested On:**
MacBook Pro (15-inch)
_Google Chrome (Version 83.0.4103.97)_
_Mozilla Firefox (Version 76.0.1)_
_Safari (Version 13.1.1)_
**Evidence:**
[Desktop](https://nodejs.org/es/)

# Excercise 2

## The test has been done with Javascript, Cypress.io & Cucumber (BDD Framework)

Concept for Automation functional testing using Javascript, Cypress.io and Cucumber. It shows any of solutions for automation test suite for different user stories of factorial calculator website. Javascript is the language used to write the test code.

Cucumber, along with Gherkin, is the testing framework. Gherkin is the business language used to write the tests in a “human readable” way. Cucumber helps capture test results as well.

Cypress is a next generation front end testing tool built for the modern web. Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different.

## Installation

First of all you need to have [NodeJS](https://nodejs.org/es/), [Chrome](https://www.google.es/chrome/index.html) browser and [Git](https://git-scm.com/download) installed. Once you have them, in order to install the tests, follow the next steps from terminal:

Clone the repository project:

```
git clone https://github.com/JrVillabona/qa-tribalscale.git
cd qa-tribalscale
```

Install the dependencies:

```
npm install
```

## Execution

In order to execute the tests, you just need to execute the following commands.

If you prefer in headless mode:

```
npm run test
```

Or if you want to perform with the Cypress console:

```
npm run cypress:open
```

Then select whether you want to run a particular feature or if you prefer to run all the features. Select the browser in which you want to run the tests, remember that Cypress supports Chrome, Edge, Firefox and Electron. After that, click on **Run all specs**. Note: Excluding Electron, any browser you want to run Cypress tests in needs to be installed on your local system.

## Generals

- In the folder `cypress/integration` there are two folders:
  `cypress/integration/common` contains the steps that are common and used in various features.
  `cypress/integration/cucumber-tests` contains the features that uses descriptive names (.features) and the folders with each of the steps. Besides, each .feature contains different scenarios.
- In file `cypress.json` there are config vars.
- In file `cypress/support/page-objects` there are page of project.

In the case of Gherkin, Background was used in the test.

## User stories with their respective .feature

1. As an User, I want to calculate a factorial number, In order to obtain the right result.

- **Calculate.feature**

## Documentation

- Cypress: https://www.cypress.io/
- Cypress-Cucumber-Preprocessor : https://www.npmjs.com/package/cypress-cucumber-preprocessor
