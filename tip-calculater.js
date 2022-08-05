// tip calculator 1
function tipAmount (amount,level) {

  if( level === `good`) {

    level = 20;

  }else if ( level === `fair`) {

    level = 15;

  }else {

    level = 10;

  };

  return ((amount*level) / 100);

};

console.log(tipAmount(100, `good`));
console.log(tipAmount(100, `fair`));
console.log(tipAmount(100, `bad`));

// tip calculator 2

function totalAmount (amount,level) {

  if( level === `good`) {

    level = 20;

  }else if ( level === `fair`) {

    level = 15;

  }else {

    level = 10;

  };

  return (((amount*level) / 100) + amount);

};

console.log(totalAmount(100, `good`));
console.log(totalAmount(100, `fair`));
console.log(totalAmount(100, `bad`));

// tip calculator 3

function splitAmount (amount,level,people) {

  if( level === `good`) {

    level = 20;

  }else if ( level === `fair`) {

    level = 15;

  }else {

    level = 10;

  };

  return ((((amount*level) / 100) + amount) / people);

};

console.log(splitAmount(100, `good`, 5));
console.log(splitAmount(100, `fair`, 5));
console.log(splitAmount(100, `bad`, 5));