// function add(a, b) {
//     return a + b;
// }
//
// console.log(add(2,2));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));


// var groupA = ['Jose', 'Luis'];
// var groupB = ['Freddy', 'Mary'];
// var final = [...groupB,3, ...groupA];
//
// console.log(final);

function intro(name, age) {
    return 'Hi ' + name + ', you are ' + age;
}

var person = ['Alonso', 27];
var personTwo = ['Nelson', 23];

console.log(intro(...person));
console.log(intro(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Alonso', ...names];

final.forEach(function (name) {
   console.log('Hi ' + name);
});