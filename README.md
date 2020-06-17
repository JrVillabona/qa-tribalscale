# Excercise 1

## Bugs Report

### Bug: #1

**Title:**
An error message should be displayed when a negative integer is entered.

**Context:**
It allows to enter negative integers, should be restricted to only positive integers or display an informational message to the user.

**Steps to reproduce it:**

1. Go to: https://qainterview.pythonanywhere.com/
2. Enter a negative integer in the textfield
3. Click on the calculate button

**Expected Result:**
It should display an error message indicating that the integer must be a positive number.

**Actual Result:**
It does not show an error message indicating that the integer must be a positive number, it is not informative for the user.

**Tested On:**
MacBook Pro (15-inch)
- _Google Chrome (Version 83.0.4103.97)_
- _Mozilla Firefox (Version 76.0.1)_
- _Safari (Version 13.1.1)_

**Evidence:**
[Desktop](https://drive.google.com/file/d/15IcoB16SJcXN8UCdeyco8wQA5wsm3Kec/view?usp=sharing)

### Bug: #2

**Title:**
It should not allow you to enter a number of more than 10 digits

**Context:**
Allows to enter very large numbers, the text field has no character limit.

**Steps to reproduce it:**

1. Go to: https://qainterview.pythonanywhere.com/
2. Enter a number of more than 10 digits in the textfield (1000000000)
3. Click on the calculate button

**Expected Result:**
It should not allow to enter a number of more than 10 digits.

**Actual Result:**
It allows to enter a number of more than 10 digits.

**Tested On:**
MacBook Pro (15-inch)
- _Google Chrome (Version 83.0.4103.97)_
- _Mozilla Firefox (Version 76.0.1)_
- _Safari (Version 13.1.1)_

**Evidence:**
[Desktop](https://drive.google.com/file/d/19pUCIXN-DpNgBr560ZCSCS2M7lMxceuE/view?usp=sharing)


# Excercise 2

## The UI tests have been done with Javascript, Cypress.io & Cucumber (BDD Framework)

Concept for Automation functional testing using Javascript, Cypress.io and Cucumber. It shows any of solutions for automation test suite for an user story of factorial calculator website. Javascript is the language used to write the test code.

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

Select the browser in which you want to run the tests, remember that Cypress supports Chrome, Edge, Firefox and Electron. After that, click on **Run all specs**. Note: Excluding Electron, any browser you want to run Cypress tests in needs to be installed on your local system.

## Generals

- In the folder `cypress/integration` there are two folders:
  `cypress/integration/common` contains the steps that are common and used in various features.
  `cypress/integration/cucumber-tests` contains the features that uses descriptive names (.features) and the folders with each of the steps. Besides, each .feature contains different scenarios.
- In file `cypress.json` there are config vars.
- In file `cypress/support/page-objects` there are page of project.

In the case of Gherkin, Background was used in the test.

## Use story with its respective .feature

- As an User, I want to calculate a factorial number, In order to obtain the right result.

- **Calculate.feature**

1. The first scenario runs 13 test cases with different values to calculate a factorial number. This test was chosen because it aims to ensure the most critical flow for the business, in this case to guarantee the main behavior of the application which is to calculate factorial numbers.

2. The second scenario runs 5 test cases with different viewports. This test was chosen because it must ensure that the application works on different devices with different resolutions, without affecting the user interface:

- ipad-2
- ipad-mini
- iphone-x
- samsung-s10
- samsung-note9
- macbook-15

## Documentation

- Cypress: https://www.cypress.io/
- Cypress-Cucumber-Preprocessor : https://www.npmjs.com/package/cypress-cucumber-preprocessor
