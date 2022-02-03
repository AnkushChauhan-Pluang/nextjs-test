const x = ['a', 'b', 'c']
let y = [...x]                      // Here y is assigned the copy of x 
y.push('d')                         // x and y are now two independent arrays

console.log('x: ', x);              // x = ['a', 'b', 'c'] <- x is not modified
console.log('y: ', y);