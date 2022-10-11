var libri = ["Nemesis", "Dubliners", "Don Chisciotte"];
var prezzi = [9.50, 3.60, 12.20];

//prendo l'elemento ul 
var elLista = document.getElementById('lista'); //ul

//stampo gli array in elLista
for(var i = 0; i < libri.length; i++){
    elLista.innerHTML += "<li>" + libri[i] + " - " + prezzi[i].toFixed(2) + " € </li>";
}

var nLista = document.getElementById('nLista');
nLista.innerHTML = "numero Libri: " + libri.length;


var totPrezzi = document.getElementById('totPrezzi');
var totale = 0;

for(var i = 0; i < prezzi.length; i++){
    totale += prezzi[i];
}

totPrezzi.innerHTML = "Totale Prezzi € " + totale.toFixed(2);

//Sezione autore della pagina
var nome = "Dario Mennillo";

var elNomeAutore = document.getElementById('nomeAutore');
elNomeAutore.innerHTML = nome;

//document.getElementById('nomeAutore').innerHTML = nome;

//salvo in una variabile il path dell'immagine a partire dalla index
var img = "./img/avatar.png";

var elImg = document.getElementById('imgAutore');
elImg.src = img;

