/// <reference types="cypress" />
const url = Cypress.config('baseUrl');
import { Then, When, Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the home page', () => {
  cy.visit(url);
});

Then('I should see the amount of letters that the word contains', () => {
  cy.get('[data-cy="correct-word"]').should('exist');
  cy.document().then((doc) => {
    const wordLength = doc.getElementById('correct').textContent.length;
    cy.get('[role="words-component"]').should('exist');
    cy.get('[data-cy="letter"]').then((placeholders) => {
      const placeholdersLength = placeholders.length;
      expect(wordLength).to.equal(placeholdersLength);
    });
  });
});

Given('A game has started', () => {
  cy.visit(url);
  cy.get('[data-cy="correct-word"]').should('exist');
});

When('I type a letter that belongs to the word', () => {
  cy.document().then((doc) => {
    const word = doc.getElementById('correct').textContent;
    const letter = word.charAt(0);
    cy.get('[role="letter-input"]').type(letter);
    cy.get('[role="try-button"]').click();
  });
});

Then('The correct letter should appear in the placeholder', () => {
  cy.document().then((doc) => {
    const word = doc.getElementById('correct').textContent;
    const letter = word.charAt(0);
    cy.get('[data-cy="letter"]').contains(letter);
  });
});

Given('A game has started with a random word', () => {
  cy.visit(url);
  cy.get('[data-cy="correct-word"]').should('exist');
});

When('I type a letter that does no belongs to the word', () => {
  cy.document().then((doc) => {
    const word = doc.getElementById('correct').textContent;
    cy.getMissingLetters([...word]).then((missingLetters) => {
      cy.get('[role="letter-input"]').type(missingLetters[0]);
      cy.get('[role="try-button"]').click();
    });
  });
});

Then('The letter should appear in the incorrect letters list', () => {
  cy.document().then((doc) => {
    const word = doc.getElementById('correct').textContent;
    cy.getMissingLetters([...word]).then((missingLetters) => {
      cy.get('[data-cy="incorrect-letters"]').contains(missingLetters[0]);
    });
  });
});

Then('the figure should have a head', () => {
  cy.get('[data-cy="head"]');
});
