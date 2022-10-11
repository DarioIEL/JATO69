var stringa = "le nostre lezioni sono a blocchi di 4 ore";

console.log( stringa.length );
console.log( stringa.indexOf('sono') ); //restituisce la prima occorrenza della stringa tra parentesi
console.log( stringa.indexOf('l')); //0
console.log( stringa.lastIndexOf('l') );
console.log( stringa.indexOf('f') );//-1

var mioArr = ["ciao", "come", "stai"];
console.log( mioArr.indexOf('pippo')); //-1

console.log( stringa.charAt(30));
console.log( stringa.charAt(0));
console.log( stringa.charAt(stringa.length - 1));

console.log( stringa.charCodeAt(0));

//Metodi taglio 
var stringa2 = "Provo a tagliare la mia stringa";

var taglio = stringa2.slice(2, 15);
console.log( taglio );

console.log( stringa2.substring(2,15));

//upp low
console.log( stringa2.toLowerCase() );
console.log( stringa2.toUpperCase() );

// sostituzione
console.log( stringa2.replace('stringa', 'frase')); //sostituisce il pattern o la stringa esistente

//STR -> Arr
var stringa3 = "Mi chiamo Dario";

var array = stringa3.split('');
console.log(array);

var arrayTest = ['D', 'a', 'r', 'i', 'o'];
console.log( arrayTest.join('') );

//è possibile concatenare più metodi o proprietà
var mioNome = "Dario";

var mionomeContrario = mioNome.split('').reverse().join('');
console.log(mionomeContrario);

