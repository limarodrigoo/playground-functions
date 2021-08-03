// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
  let highestNum = arr[0];
  let highestNumCont = 0;
  for (let key = 0; key < arr.length; key += 1) {
    if (arr[key] > highestNum) {
      highestNumCont = 0;
      highestNum = arr[key];
    }
    if (arr[key] === highestNum) {
      highestNumCont += 1;
    }
  }
  return highestNumCont;
}

highestCount([-2, -2, -1]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distance1 = 0;
  let distance2 = 0;

  distance1 = Math.abs(cat1 - mouse);
  distance2 = Math.abs(cat2 - mouse);

  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance2 < distance1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

function isDivisibleFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return ('fizzBuzz');
  }
  if (num % 5 === 0) {
    return ('buzz');
  }
  if (num % 3 === 0) {
    return ('fizz');
  }
  return ('bug!');
}

// Desafio 8
function fizzBuzz(arr) {
  // seu código aqui
  let newArr = [];
  for (let key = 0; key < arr.length; key += 1) {
    newArr.push(isDivisibleFizzBuzz(arr[key]));
  }
  return newArr;
}

// Desafio 9

function encodingVowels(char) {
  let vowels = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  if (vowels[char]) return vowels[char];
  return char;
}

function encode(str) {
  // seu código aqui
  let newStr = '';
  for (let index = 0; index < str.length; index += 1) {
    newStr += encodingVowels(str.charAt(index));
  }
  return newStr;
}
function decodingVowels(char) {
  let nums = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  if (nums[char]) return nums[char];
  return char;
}

function decode(str) {
  // seu código aqui
  let newStr = '';
  for (let index = 0; index < str.length; index += 1) {
    newStr += decodingVowels(str.charAt(index));
  }
  return newStr;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
