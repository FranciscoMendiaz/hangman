/// <reference types="cypress" />
const url = Cypress.config('baseUrl');
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";


Given("I visit the home page", () => {
  cy.visit(url);
});

Then("I should see the game title", () => {
  cy.contains('Ahorcado con TDD!');
});


Given("I open the home page", () => {
  cy.visit(url);
});

Then("I should see the amount of letters that the word contains", () => {
  cy.get('[data-cy="correct-word"]').should('exist');
  cy.document().then((doc) => {
    const wordLength = doc.getElementById('correct').textContent.length;
    cy.get('[role="words-component"]').should('exist');
    cy.get('[data-cy="letter"]').then((placeholders) => {
      const placeholdersLength = placeholders.length
      expect(wordLength).to.equal(placeholdersLength)
    });
  });
});



// it('shows a win popup', () => {
//   cy.get('[data-cy="correct-word"]').should('exist');
//   cy.document().then((doc) => {
//     const word = doc.getElementById('correct').textContent;

//     const wordLetters = new Set([...word]);

//     wordLetters.forEach((letter) => {
//       cy.get('[role="letter-input"]').type(letter);
//       cy.get('[role="try-button"]').click();
//       cy.get('[data-cy="letter"]').contains(letter);
//     });

//     cy.contains(`${gameMessages.win} La palabra era: ${word}`);
//   });
// });











//   it('shows a game over popup and completes the figure', () => {
//     // GIVEN ME QUEDA UN INTENTO
//     // WHEN PONGO UNA LETRA INCORRECTA
//     // THEN DEBERIA VER UN CARTEL QUE DIGA QUE PERDI
//     // AND EL MUNECO DEBERIA ESTAR COMPLETO
//   });
// });
