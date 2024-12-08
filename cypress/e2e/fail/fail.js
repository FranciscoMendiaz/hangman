/// <reference types="cypress" />
import { gameMessages } from '@src/utils/messages';
import { Then, Given, When } from '@badeball/cypress-cucumber-preprocessor';

const url = Cypress.config('baseUrl');

Given('The game has started with a random word', () => {
  cy.visit(url);
  cy.get('[data-cy="correct-word"]').should('exist');
});

When('I type all the incorrect letters of the word', () => {
  cy.document().then((doc) => {
    const word = doc.getElementById('correct').textContent;

    cy.getMissingLetters([...word]).then((missingLetters) => {
      for (let i = 0; i < 6; i++) {
        cy.get('[role="letter-input"]').type(missingLetters[i]);
        cy.get('[role="try-button"]').click();
        cy.get('[data-cy="incorrect-letters"]').contains(missingLetters[i]);
      }
    });
  });
});

Then('I should see the game over toast', () => {
  cy.document().then((doc) => {
    const word = doc.getElementById('correct').textContent;
    cy.contains(`${gameMessages.gameOver} La palabra era: ${word}`);
  });
});
