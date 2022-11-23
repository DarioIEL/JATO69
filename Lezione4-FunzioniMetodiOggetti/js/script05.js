//Prendere i dati inseriti nel form e costruire un array di utenti. Stampa l'array nel demo di volta in volta, cioè ad ogni inserimento + stampa al caricamento della pagina. ATT: i campi devono essere obbligatori

function Utente(nome, cognome, email, matricola) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.matricola = matricola;

    //backtick alt + 96
    this.toString = function () {
        return `Nome: ${this.nome} -  Cognome: ${this.cognome} - Matr: ${this.matricola} - Email: ${this.email}`;
    }
}

function recuperaInfo() {
    var nome = document.getElementById('nome').value;
    var cognome = document.getElementById('cognome').value;
    var email = document.getElementById('email').value;
    var matricola = document.getElementById('matricola').value;

    if (controllaCampi(nome, cognome, email, matricola)) {

        var mioUtente = new Utente(nome, cognome, email, matricola);
        // console.log(mioUtente.toString());
        utenti.push(mioUtente);
        console.log(utenti);

        stampaLista();
        pulisciCampi();
    }
}

function stampaLista() {
    demo.innerHTML = ''
    utenti.forEach(utente => {
        demo.innerHTML += "<li>" + utente.toString() + "</li>";
    });

    // for(var i = 0; i < utenti.length; i++){
    //     demo.innerHTML += "<p>" + utenti[i].toString() + "</p>";
    // }
}

function pulisciCampi() {
    document.getElementById('nome').value = ''
    document.getElementById('cognome').value = ''
    document.getElementById('matricola').value = ''
    document.getElementById('email').value = ''
}

function controllaCampi(nome, cognome, email, matricola) {
    var feed = document.getElementById('feed');
    feed.innerHTML = '';

    // if(nome == '' || cognome == '' || email == '' || matricola == ''){
    //     feed.innerHTML = "Caro utente, i campi sono obbligatori";
    //     return false;
    // }

    
    if(nome != '' && cognome != '' && email != '' && matricola != ''){
        feed.innerHTML = "Caro utente, i dati sono stati salvati !";
        return true;
    }else{
        var campiDimenticati = '';
        
        if(nome == ''){
            campiDimenticati += "nome ";
        }
        if(cognome == ''){
            campiDimenticati += "cognome ";
        }
        if(email == ''){
            campiDimenticati += "email ";
        }
        if(matricola == ''){
            campiDimenticati += 'matricola '
        }

        feed.innerHTML = "Caro utente, hai sicuramente dimenticato " + campiDimenticati
        return false;
    }

    
}


//Controllare i singoli campi
//stampare l'ora e la data in cui registriamo l'utente (la prossima volta)

var demo = document.getElementById('demo');

var utenti = [];

document.getElementById('btn').onclick = recuperaInfo;