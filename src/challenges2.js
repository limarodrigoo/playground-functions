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
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

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
