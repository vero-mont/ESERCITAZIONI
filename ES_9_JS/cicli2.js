
console.log("A seguire puoi trovare i numeri pari:");


for(let i=1; i<=20; i++) {
    if(i%2==0){
        console.log(i);
    }
}
  




let somma = 0;
let conteggio= 0;
for( let d=1; d<=20; d++) {
    if(d%2!=0){
        somma= somma+d; // somma+=d;
        conteggio++;
    }
}


let media = somma/conteggio;
console.log("la somma dei n. dispari è:" + somma);
console.log("la media degli n. dispari è:" + media);