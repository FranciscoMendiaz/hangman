/// <reference types="cypress" />
import { gameMessages } from '@src/utils/messages';
import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';

const url = Cypress.config('baseUrl');

describe('win tests', () => {
  beforeEach(() => {
    // GIVEN (visito la pagina)
    cy.visit(url);
  });

  it('displays the correct letters', () => {
    cy.get('[data-cy="correct-word"]').should('exist');
    cy.document().then((doc) => {
      const word = doc.getElementById('correct').textContent;
      const letter = word.charAt(0);
      cy.get('[role="letter-input"]').type(letter);
      cy.get('[role="try-button"]').click();
      cy.get('[data-cy="letter"]').contains(letter);
    });
  });

  it('shows a win popup', () => {
    // GIVEN ADIVINE TODAS LAS LETRAS MENOS UNA
    // WHEN PONGO LA LETRA CORRECTA QUE ME FALTA
    // THEN DEBERIA VER UN CARTEL QUE DIGA QUE GANE
    cy.get('[data-cy="correct-word"]').should('exist');
    cy.document().then((doc) => {
      const word = doc.getElementById('correct').textContent;

      const wordLetters = new Set([...word]);

      wordLetters.forEach((letter) => {
        cy.get('[role="letter-input"]').type(letter);
        cy.get('[role="try-button"]').click();
        cy.get('[data-cy="letter"]').contains(letter);
      });

      cy.contains(`${gameMessages.win} La palabra era: ${word}`);
    });
  });
});
