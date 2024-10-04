const output = doubleMe(5);

function doubleMe(num) {
  return num * 2;
}

// hoisted
console.log(output);

// normal
console.log(doubleMe(6));
console.log(doubleMe(69));
console.log(doubleMe(100));
