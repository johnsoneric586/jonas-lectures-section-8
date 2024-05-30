'use strict';

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT'; // redefining an existing variable within an inner scope
    }
    // console.log(str); // reference error
    // console.log(millenial); // no reference error (var is not block scoped)
    // add(1, 2); // reference error (functions are also block scoped, unless strict mode is off)
    // console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Eric';
calcAge(1996);
