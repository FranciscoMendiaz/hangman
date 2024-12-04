/// <reference types="cypress" />

const url = Cypress.config('baseUrl');

describe('win tests', () => {
  beforeEach(() => {
    // GIVEN (visito la pagina)
    cy.visit(url);
  });

  it('displays the game title', () => {
    // WHEN (miro la pagina)
    const correctWord = cy.contains('[data-cy="correct-word"]');
    cy.log(correctWord);

    // cy.get('[role="letter-input"]').type(correctWord.charAt(0));

    // THEN (el titulo aparece)
    cy.contains('Ahorcado con TDD!');
  });

  it('shows a win popup', () => {
    // GIVEN ADIVINE TODAS LAS LETRAS MENOS UNA
    // WHEN PONGO LA LETRA CORRECTA QUE ME FALTA
    // THEN DEBERIA VER UN CARTEL QUE DIGA QUE GANE
  });
});
