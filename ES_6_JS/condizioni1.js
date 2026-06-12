/*
let v = 18;
if (v<21 && v>=18){
  console.log("sufficiente");
}
else if (v<24 && v>=21){
    console.log("buono");
}
else if (v<27 && v>=24){
    console.log("distinto");
}
else if (v<=29 && v>=27){
    console.log("ottimo");
}
else if (v==30) {
    console.log("eccellente");
}

*/


let v = 18;

switch (true){
    case v<21 && v>=18 :
    console.log("sufficiente");
    break;

    case v<24 && v>21 :
        console.log("buono");
    break;

    case v<27 && v>=24  :
    console.log("distinto");
    break;

    case v<=29 && v>=27 :
    console.log("ottimo");
    break;

    case v==30 :
    console.log("eccellente");
    break;

    default:
        console.log("ERRORE!");
}