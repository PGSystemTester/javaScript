function getRandomNumbersBetween(someNumber,otherNumber) {
  const numbers = [];
  for (var i = Math.min(someNumber, otherNumber); i <= Math.max(someNumber, otherNumber); i++) {
    numbers.push(i);
  }
  return shuffle_(numbers);
}


function shuffle_(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log(getRandomNumbersBetween(1,5));  // Example output: [3, 1, 5, 4, 2]
