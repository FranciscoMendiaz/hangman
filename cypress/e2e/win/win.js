/// <reference types="cypress" />
import { gameMessages } from '@src/utils/messages';
import { Then, Given, When } from '@badeball/cypress-cucumber-preprocessor';

const url = Cypress.config('baseUrl');

Given('The game has started with a random word', () => {
  cy.visit(url);
  cy.get('[data-cy="correct-word"]').should('exist');
});

When('I type all the correct letters of the word', () => {
  cy.document().then((doc) => {
    const word = doc.getElementById('correct').textContent;

    const wordLetters = new Set([...word]);

    wordLetters.forEach((letter) => {
      cy.get('[role="letter-input"]').type(letter);
      cy.get('[role="try-button"]').click();
      cy.get('[data-cy="letter"]').contains(letter);
    });
  });
});

Then('I should see the win game toast', () => {
  cy.document().then((doc) => {
    const word = doc.getElementById('correct').textContent;
    cy.contains(`${gameMessages.win} La palabra era: ${word}`);
  });
});
