// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
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
  for (let key in arr) {
    if (arr[key] > highestNum) {
      highestNum = arr[key];
    }
  }
  for (let key2 in arr) {
    if (arr[key2] === highestNum) {
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
  } else if (distance2 < distance1) {
    return 'cat2';
  } else if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }

}

// Desafio 8
function fizzBuzz(arr) {
  // seu código aqui
  let newArr = [];

  for (let key in arr) {
    if (arr[key] % 3 === 0 && arr[key] % 5 === 0) {
      newArr.push('fizzBuzz');
    } else if (arr[key] % 5 === 0) {
      newArr.push('buzz');
    } else if (arr[key] % 3 === 0) {
      newArr.push('fizz');
    } else {
      newArr.push('bug!');
    }
  }
  console.log(newArr);
  return newArr;
}

fizzBuzz([2, 15, 7, 9, 45]);
// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
