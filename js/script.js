'use strict';

let user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

///////////////////////////////

const User = {
  name: 'John'
};

User.name = 'Pete'; //Это будет работать, т.к. сама переменная const не меняет свое значение, а меняется свойство обьекта.

///////////////////////////////

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;

for (let cashNumber in salaries) {
 sum += salaries[cashNumber];
}

console.log(sum);