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

generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]);

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
