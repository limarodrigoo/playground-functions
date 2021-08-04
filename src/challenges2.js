// Desafio 10
function techList(arr, name) {
  if (!arr || arr.length < 1) return 'Vazio!';
  arr.sort();
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    newArr.push({
      tech: arr[index],
      name,
    });
  }
  return newArr;
}
const errorMsgTel = 'não é possível gerar um número de telefone com esses valores';

function validateLimits(num) {
  if (num < 0 || num > 9) return errorMsgTel;
}
function validateArr(num, numReps) {
  let returnMsg;
  returnMsg = validateLimits(num);
  if (numReps[num]) {
    numReps[num] += 1;
    if (numReps[num] > 2) returnMsg = errorMsgTel;
  } else {
    numReps[num] = 1;
  }
  return returnMsg;
}

// Desafio 11
function generatePhoneNumber(arr) {
  // seu código aqui
  let numReps = {
  };
  if (arr.length !== 11) return 'Array com tamanho incorreto.';
  for (let index = 0; index < arr.length; index += 1) {
    let error = validateArr(arr[index], numReps);
    if (error) return error;
  }
  let str = arr.join('');
  let newStr = `(${str.substring(0, 2)}) ${str.substring(2, 7)}-${str.substring(7, 11)}`;
  return newStr;
}
function checkingSides(a, b, c) {
  if (a > b + c || a < Math.abs(b - c)) return false;
  return true;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let triangleValidate = true;
  triangleValidate = checkingSides(lineA, lineB, lineC);
  triangleValidate = checkingSides(lineB, lineA, lineC);
  triangleValidate = checkingSides(lineC, lineA, lineB);
  return triangleValidate;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
