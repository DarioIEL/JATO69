//metodo prompt 
var nomeUser = prompt("Come ti chiami ? "); //la risposta al prompt può essere salvata in una variabile
var etaUser = prompt("Quanti anni hai ?"); // -> "33" il prompt restituisce tutte stringhe

var cittaUser = prompt("Dove vivi ?");



//STAMPO IN CONSOLE
console.log("Ciao " + nomeUser);
console.log("Hai " + etaUser + "anni");

var nuovaEta = Number(etaUser) + 5;

console.log("Tra 5 anni avrai " + nuovaEta + " anni");
console.log("Vivi a " + cittaUser);


//STAMPO NELLA PAGINA con document.write()
// document.write("<p>Ciao " + nomeUser + "</p>");
// document.write("<p>Hai " + etaUser + " anni</p>");
// document.write("<p>Tra 5 anni avrai " + nuovaEta + " anni</p>");
// document.write("<p>Vivi a " + cittaUser + "</p>");

//Voglio stampare esattamente all'interno del UL
//Vado a prendere il tag attraverso il suo ID
//getElementById() è un metodo del DOM
var elInfoUser = document.getElementById("infoUser");
// console.log(elInfoUser);

//Modifico la sua propr innerHTML 
elInfoUser.innerHTML = "<li>Nome: " + nomeUser +"</li>"+
                        "<li>Età: " + etaUser + "</li>"+
                        "<li>Nuova Età: " + nuovaEta + "</li>"+
                        "<li> Città di residenza: " + cittaUser + "</li>";



//////////////////////////

var miaVariabile = "Pippo";

miaVariabile = "Paperina";

miaVariabile = "Gennarino";

miaVariabile = 40;

miaVariabile = false;

console.log(miaVariabile);

