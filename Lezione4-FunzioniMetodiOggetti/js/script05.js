function Utente(nome, cognome, matricola, email){
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.email = email;

    this.stampa = function(){
        var info = 'Nome: ' + this.nome + " " + this.cognome + " Matr: " + this.matricola + " Email: " + this.email;

        return info;
    }
}

//Prendere i dati inseriti nel form e costruire un array di utenti. Stampa l'array nel demo di volta in volta, cioè ad ogni inserimento + stampa al caricamento della pagina. ATT: i campi devono essere obbligatori

var btn = document.getElementById('btn');

function registraUtente(){
    console.log("Utente registrato");
}

btn.onclick = registraUtente;


