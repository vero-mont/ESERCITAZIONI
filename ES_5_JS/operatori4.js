let gatti_totali= 10;
console.log("i gatti totali sono:  " + gatti_totali); // 10
let gatti_per_fila= 3;


let file_totali= (gatti_totali / gatti_per_fila);
/*console.log(file_totali); // 3.3333333333333335 */

console.log("le file totali sono:  " + Math.floor(file_totali)); // 3

let gatti_rimanenti= (gatti_totali % gatti_per_fila);
console.log("i gatti rimanenti sono:  " + gatti_rimanenti); // 1

let gatti_per_altra_fila= (gatti_per_fila - gatti_rimanenti);
console.log("i gatti per completare  un'altra fila sono:  " + gatti_per_altra_fila); // 2
