/// <reference types="cypress" />

const url = Cypress.config('baseUrl');

describe('example to-do app', () => {
  beforeEach(() => {
    // GIVEN (visito la pagina)
    cy.visit(url);
  });

  it('displays the game title', () => {
    // WHEN (miro la pagina)

    // THEN (el titulo aparece)
    cy.contains('Ahorcado con TDD!');
  });

  it('displays the game title', () => {
    // WHEN (miro la pagina)

    // THEN (el titulo aparece)
    cy.contains('Letras incorrectas probadas:');
  });

  
  it('displays the placeholders', () => {
    // WHEN El juego se inicializa y comienza una nueva partida.
    // THEN DEBERIA APARECER TANTAS LINEAS COMO LETRAS TIENE LA PALABRA
    const letters = cy.get('[data-cy="letter"]');

    expect(letters.length).equals(cy.getCorrectWord().length);
  });





      

  it('shows a game over popup and completes the figure', () => {
    // GIVEN ME QUEDA UN INTENTO
    // WHEN PONGO UNA LETRA INCORRECTA
    // THEN DEBERIA VER UN CARTEL QUE DIGA QUE PERDI
    // AND EL MUNECO DEBERIA ESTAR COMPLETO
  });
});
