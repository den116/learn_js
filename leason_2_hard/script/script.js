

let num = 266219;
let sep = (""+num).split("").reduce((a,b)=>a*b);
console.log(sep);

sep = (sep ** 3);

console.log(String(sep).slice(0,2));

// let cube = 3,
//     result = 1,
//     i = 0;

// while(i <  cube) {
//   result = result * sep;
//   i++;
// }

// console.log(String(result).slice(0,2));