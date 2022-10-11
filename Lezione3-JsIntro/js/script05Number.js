var primoNumero = 34.657788;

console.log(primoNumero.toFixed(2)); //toFixed() quante cifre decimali mostrare;

console.log(primoNumero.toPrecision(5)); //toPrecision() numero di cifre significative

//utilizzo di Number()

var x1 = 42;

console.log(Number(x1));

var x2 = true;
var x3 = false;
var x4 = '123';
var x5 = new Date();
var x6 = '123 456';
var x7 = "Dario";

console.log(Number(x2));
console.log(Number(x3));
console.log(Number(x4));
console.log(x5);
console.log(Number(x5));
console.log(Number(x6));
console.log(Number(x7));


//isNaN è un NON numero ?
var p1 = "Pippo";
var p2 = 56;

console.log(isNaN(p1)); //true perché pippo è una string
console.log(isNaN(p2)); //false perché 56 è un numero

//parseINT e parseFloat
var a = 10.45;
var b = 12;
var c = "10.99";
var d = "Ciao";

console.log( parseInt(a) );
console.log( parseInt(b) );
console.log( parseInt(c) );
console.log( parseInt(d) );


var e = 5;
var f = 4.67;
var g = "3.45";

console.log( parseFloat(e));
console.log( parseFloat(f));
console.log( parseFloat(g));

console.log( parseInt('0111010110', 2) );

//eval()
var num1 = 6;
var num2 = 5;

console.log( eval('num1 * num2') );
console.log( eval('num1 + num2') );



