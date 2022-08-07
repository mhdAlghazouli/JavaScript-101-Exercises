// tip calculator 1
const good = 20;
const fair = 15;
const bad = 10;

function tipAmount (amount,level) {

  

  return ((amount*level) / 100);

};

tipAmount(100, good);
tipAmount(200, fair);
tipAmount(120, bad);

// tip calculator 2

function totalAmount (amount,level) {

  return (((amount*level) / 100) + amount);

};

totalAmount(100, good);
totalAmount(200, fair);
totalAmount(120, bad);

// // tip calculator 3

function splitAmount (amount,level,people) {

  return ((((amount*level) / 100) + amount) / people);

};

splitAmount(100, good, 5);
splitAmount(100, fair, 5);
splitAmount(100, bad, 5);