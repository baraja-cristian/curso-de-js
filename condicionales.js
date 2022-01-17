//condicionales 
 let n1 = 20;
 let n2 = 30;

 let result = n1 + n2;
//condicional if
 if (result < 20){
     console.log("el número es menor que 20");
 }else{
     console.log("el número es mayor que 20");
 }

// condicional switch
 let tyPeCard = "pypal";
 switch(tyPeCard){
     case "debid card":
         console.log("esta es un terjeta de debito");
         break;
    case "credit card":
        console.log("esta es una terjeta de credito");
        break;
    default:
        console.log("no es ningun tipo de targeta")
 }