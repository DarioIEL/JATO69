var colori = ["bianco", "verde", "viola", "blu"];

// var colori2 = [];
// colori2 = ["rosso", "giallo"]

//Array famiglia Iterables
// var mioArray = ["Dario", "Mennillo", 33, true, "Torino"]; //Fattibile ma poco senso logico
// console.log(mioArray);

// var estrazioneLotto = [13, 4, 22, 90, 87, 45, 67];

// var presenzeStudenti = [true, false, false, true, true]

//riassegno un valore ad un elemento
colori[2] = "arancione";


var elListaColori = document.getElementById('listaColori');
// elListaColori.innerHTML = colori;

for(var i = 0; i < colori.length; i++){
    elListaColori.innerHTML += colori[i] + "<br>";
}


//aggiungo in ultima posizione un colore
colori.push("rosso");

//ordino alfabeticamente
colori.sort();

//inverto l'array
colori.reverse();

//rimuovo l'ultimo elemento
colori.pop();

//metodo per la ricerca di un elemento
var posizioneRosso = colori.indexOf('rosso'); //se il colore non esiste la posizione è -1
console.log("Il colore rosso è in posizione: " + posizioneRosso);

console.log(colori);



