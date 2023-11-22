// Desafio 1 - Crie a função compareTrue

const compareTrue = (val1, val2) => val1 && val2 === true ? true : false;

// Desafio 2 - Crie a função splitSentence

function splitSentence(str) {
  let sentenca = str.split(' ');
  return sentenca;
}
// console.log(splitSentence ('go Trybe'));
// console.log(splitSentence ('vamo que vamo'));
// console.log(splitSentence ('foguete'));

// Desafio 3 - Crie a função concatName

function concatName (array) {
  const tamanho = array.length;
  const primeiraPalavra = array[0];
  const ultimaPalavra = array[tamanho - 1];
  const arrayPalavras = [];
  arrayPalavras.push (ultimaPalavra, primeiraPalavra);
  let txt = arrayPalavras.join (', ');
  
  return txt;
}
// console.log(concatName (['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// console.log(concatName (['foguete', 'não', 'tem', 'ré']));
// console.log(concatName (['captain', 'my', 'captain']));

// // Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => {
  let sum = 0;
  let winPoints = wins * 3;
  let drawPoints = ties * 1;
  return sum = winPoints + drawPoints;
}

// console.log(footballPoints([14], [8]));
// console.log(footballPoints([1], [2]));
// console.log(footballPoints([0], [0]));

// Desafio 5 - Crie a função highestCount

function highestCount (array) {
  let biggestNumber = (array[0]);
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > biggestNumber){
      biggestNumber = array[index];
    }
  }
  for (let j = 0; j < array.length; j += 1) {
    if (array[j] === biggestNumber) {
    count += 1;
    }
  }
  return count;
}

// console.log(highestCount ([9, 1, 2, 3, 9, 5, 7]));
// console.log(highestCount ([0, 4, 4, 4, 9, 2, 1]));
// console.log(highestCount ([0, 0, 0]));

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea(base, height) {
  return (base * height) / 2;
}
function calcRectangleArea(base, height) {
  return (base * height);
}
function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return 'O valor da área do triângulo é de: ' + ((base * height) / 2);
  } else if (form === 'retângulo') {
    return 'O valor da área do retângulo é de: ' + (base * height);
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}

// console.log(calcTriangleArea(10, 50));
// console.log(calcRectangleArea(10, 50));
// console.log(calcAllAreas(10, 50, 'triângulo'));
// console.log(calcAllAreas(10, 50, 'retângulo'));
// console.log(calcAllAreas(10, 50, 'quadrado'));

// Desafio 7 - Crie a função catAndMouse

function catAndMouse(mouse, cat1, cat2) {
  let cat1Pos = Math.abs(mouse - cat1);
  let cat2Pos = Math.abs(mouse - cat2);

  if (cat1Pos < cat2Pos) {
    return 'cat1';
  } else if (cat1Pos > cat2Pos) {
    return 'cat2';  
  }    
    return 'os gatos trombam e o rato foge';
  }
 
// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(array) {
  let resposta = [];
  for (let index = 0; index < array.length; index += 1) {   
    if ((array[index] % 3) !== 0 && (array[index] % 5) !== 0) {
      resposta.push('bug!');
    } else if ((array[index] % 3) === 0 && (array[index] % 5) === 0) {
      resposta.push('fizzBuzz');
    } else if ((array[index] % 5 === 0)) {
      resposta.push('buzz');
    } else if ((array[index] % 3) === 0) {
      resposta.push('fizz');
  }
}
  return resposta;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));
// console.log(fizzBuzz([7,9]));
// console.log(fizzBuzz([9,25]));

// Desafio 9 - Crie a função encode e a função decode

function encode(listEncode) {
  let code = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 1; index <= code.length; index += 1) {
    listEncode = listEncode.replace(RegExp(code[index - 1], 'g'), index);
  }
  return listEncode;
}
function decode(listDecode) {
  let code = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 1; index <= code.length; index += 1) {
    listDecode = listDecode.replace(RegExp(index.toString(), 'g'), code[index - 1]);
  }
  return listDecode;
}

// Desafio 10 - Crie a função techList

function techList (tech, name) {
  
  let Array = [];
  tech.sort();
  for (let argName of tech) {
    let list = {
      tech: argName,
      name: `${name}`
    }
    Array.push(list);
  }

  if (tech.length === 0) {
    return [];
  }
  return Array;
}

// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'))
// console.log(techList([], 'Lucas'))

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
