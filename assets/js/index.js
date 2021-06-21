'use strict';

// Написать функцию capitalize, которая будет для каждого слова в строке делать первую букву большой.


// Методы, которые могут понадобиться
//   String.prototype.split
//   Array.prototype.map
//   String.prototype.toUpperCase
//   String.prototype.slice
//   Array.prototype.join

const str = "some string 1 need";

function capitalize(string) {
  return string.split(' ').map((text) =>  text[0].toUpperCase() + text.slice(1)).join(' ');
}

console.log(capitalize(str));