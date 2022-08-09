// tip calculator 1
const good = 20;
const fair = 15;
const bad = 10;

function tipAmount (amount,level) {

  

  return ((amount*level) / 100);

};

console.log(tipAmount(100, good));
console.log(tipAmount(200, fair));
console.log(tipAmount(120, bad));

// tip calculator 2

function totalAmount (amount,level) {

  return (((amount*level) / 100) + amount);

};

console.log(totalAmount(100, good));
console.log(totalAmount(200, fair));
console.log(totalAmount(120, bad));

// // tip calculator 3

function splitAmount (amount,level,people) {

  return ((((amount*level) / 100) + amount) / people);

};

console.log(splitAmount(100, good, 5));
console.log(splitAmount(100, fair, 5));
console.log(splitAmount(100, bad, 5));