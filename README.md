# Ahorcado con TDD

El **Ahorcado con TDD** es una versión del clásico juego de ahorcado, pero con un enfoque en palabras y términos relacionados con metodologías ágiles. Este juego no solo es divertido, sino que también es una excelente manera de aprender y familiarizarse con el vocabulario de Agile.

## Como instalar

Se necesita tener instalada la versión de Node.js 22.11.0 o superior para ejecutar el proyecto.

1. Clonar el repositorio.
2. Ejecutar el comando `npm install` en la raíz del proyecto.

## Tests

### Tests unitarios de la lógica de negocio

Estos tests se encuentran en `test/services`.

### Tests unitarios de componentes

Estos tests pueden encontrarse en el directorio `test/components`.

**Para correr los tests de `services` y `components` ejecutar `npm run test:gui` en la raíz del proyecto.**

### Tests de aceptación

Estos tests se desarrollaron con la herramienta de tests de end-to-end Cypress, y se encuentran en `cypress/e2e`. Para correrlos primero se debe ejecutar el comando `npm run build:test`, luego `npm run preview` y finalmente `npm run cy:open`. A continuación se deben seguir los siguientes pasos:

1. Elegir el navegador deseado para realizar los test.
2. Seleccionar la opción `utilizar el navegador para los e2e tests`.
3. Seleccionar el archivo `feature` del cual se quieren ejecutar los tests.

## Integracion Continua

Este proyecto utiliza GitHub Actions para:

- Realizar el analisis estatico de codigo con ESLint y Prettier.
- Correr los tests unitarios de `services` y `components` con reporte de coverage.
- Correr los tests de aceptacion en un browser chrome emulado.

El archivo de workflow esta definido en `.github/workflows/tests.yml`.

## Deploy en producción

El proyecto utiliza Vercel para deployar la aplicación de manera tal que sea accesible para jugar por usuarios alrededor del mundo. Cada vez que se haga un push en la rama main del repositorio, Vercel renovará el deploy y analizará si continuará con la nueva versión o fallará y mantendrá la versión anterior estable.

Se puede acceder al juego de forma remota y deployado [a través del siguiente link](https://hangman-agiles.vercel.app/). 
