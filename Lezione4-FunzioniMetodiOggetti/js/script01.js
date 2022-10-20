//dichiaro la funzione
function miaFunzione(){
    console.log("Ciao dalla funzione");
}

//richiamo la funzione
miaFunzione();


//funzione con parametri 
function salutaUtente(nome, cognome){
    var demo = document.getElementById('demo');
    console.log("Ciao " + nome + " " + cognome );
    demo.innerHTML = "Ciao " + nome +  " " + cognome;
}


salutaUtente("Dario", "Mennillo");

var miaVariabile = 2; //variabile globale, sono visibile anche all'interno delle funzioni 

function calcolaDimensioni(){
    var misura = miaVariabile + 10; //variabile locale, vivono solo nella funzione 
    console.log("La misura vale: " + misura);
}

//console.log(misura); //misura all'esterno non è visibile

calcolaDimensioni();