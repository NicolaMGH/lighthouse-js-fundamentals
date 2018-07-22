function howManyHundreds(num) {
  var mod = num / 100
  return Math.floor(mod);

}


console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(123456));