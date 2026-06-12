/*let t = parseInt(prompt("inserisci una temperatura"));
if (t<20){
  console.log("non ci sono più mezze stagioni");
}
else if (t>=30){
    console.log("lu mare, lu sole, lu ientu");
}
else if (t<30){
    console.log("mi dia una peroni sudata");
}
else if (t<0){
    console.log("non è tanto il freddo quanto l'umidità");
}
else if (t<-10) {
    console.log("copriti..ancora ti raffreddi");
} */


let t = parseInt(prompt("inserisci una temperatura"));

switch(true){
    case t<20 :
        console.log("non ci sono più mezze stagioni");
        break;

    case t>=30:
        console.log("lu mare, lu sole, lu ientu");
        break;

    case t<30:
        console.log("mi dia una peroni sudata");
        break;

    case t<0:
        console.log("non è tanto il freddo quanto l'umidità");
        break;

    case t<-10:
        console.log("copriti...ancora che ti raffreddi")
        break;

    default:
        console.log("ERRORE!");
}