// Desafio 11 - Crie a função generatePhoneNumber

// Desafio 12 -  Crie a função triangleCheck

function triangleCheck(lineA, lineB, lineC) {
  let checkA = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  let checkB = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
  let checkC = lineC < lineB + lineA && lineC > Math.abs(lineB - lineA);

  return checkA && checkB && checkC;
}

// Desafio 13 - Crie a função hydrate

function hydrate(drink) {
  let amountOfDrinks = drink.match(/\d+/g).map(Number);
  let glassOfWater = amountOfDrinks.reduce((a, b) => a + b, 0);
  let result = '';
  if (glassOfWater === 1) {
    result = `${glassOfWater} copo de água`;
  } else {
    result = `${glassOfWater} copos de água`;
  }
  return result;
}

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
