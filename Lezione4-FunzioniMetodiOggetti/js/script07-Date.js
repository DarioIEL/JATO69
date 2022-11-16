var oggi = new Date();
console.log(oggi);

var anno = oggi.getFullYear();
var mese = oggi.getMonth(); //sono 0-based
var giorno = oggi.getDay(); //sono 0-based. Il giorno 0 della settimana  è la domenica
var data = oggi.getDate();

var ore = oggi.getHours();
var minuti = oggi.getMinutes();
var secondi = oggi.getSeconds();

console.log(anno, mese, giorno, ore, minuti, secondi, data);

var giorniSettimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"]

//Orologio digitale

var info = document.getElementById('info');

//posso chiamare una funzione temporizzata

setInterval( () => {

    var now = new Date();
    var ora = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    info.innerHTML =ora + ": " + min + " : " + sec; 
    console.log(ora + ": " + min + " : " + sec);
}, 1000 )


//audio ogni 18, "sono le sei e tutto va bene !!!!"

function miaF(){
    console.log("ciao");
}

setInterval(miaF, 2000);