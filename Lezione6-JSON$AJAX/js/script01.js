//funzione costruttore
function Utente2(nome, cognome, eta, email, materie){
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.email = email;
    this.materie = materie;
};

var mioUtente = new Utente2("Dario", "Mennillo", 33, "dario.mennillo@mail.com", ['JS','Ng', 'Java']);

//notazione letterale, creo l'oggetto specifico 
var utente = {
    nome: "Pippo",
    cognome: "Rossi",
    eta: 30,
    email: "pippo.rossi@mail.com",
    materieStudiate: ["Java", "Javascript", "Html & Css"]
};

console.log(utente.nome);

var utenteFormatoJSON = '{"nome": "Pippo", "cognome": "Rossi", "eta": 30, "email": "pippo.rossi@mail.com", "materieStudiate": ["JAVA", "Javascript", "HTML"]}';

console.log(utenteFormatoJSON); //string
console.log(utenteFormatoJSON.nome); //undefined

//trasformo l'utenteFormatoJson in un utente formato JS
var mioUtenteFormatoJS = JSON.parse(utenteFormatoJSON);

console.log(mioUtenteFormatoJS); //object
console.log(mioUtenteFormatoJS.cognome); //Rossi


//costruisco il mio oggetto con la notazione JS che voglio e lo trasfomo in JSON, cioè una stringa

var studente =  {
    nome: "Valentina",
    cognome: "De Iaco",
    scopo: "interrompere la conessione al docente",
    materieDiStudio : ["Java", "Javascript", "Html & Css", "Database"],

    dossaConnessione: function(){
        var connessione = true;
        if(connessione){
            console.log("Attacca connessione");
        }else{
            console.log("Connessione Down");
        }
    }
};

console.log(studente);
console.log( typeof studente );
console.log(studente.nome);

//per poter trasferire l'oggetto studente ad un'altra tecnologia lo devo trasformare in un JSON - > String
//Quando trasformo lo studente in string, i metodi non vengono assolutamente "conteggiati"
var studenteJSON = JSON.stringify(studente);

console.log(studenteJSON); // '{...obj}'
console.log(typeof studenteJSON); //string
console.log(studenteJSON.nome); //undefined


//rendo stringa l'oggetto utente costruito con la notazione costruttore, quello della riga 10

var utenteJSON = JSON.stringify(mioUtente);
console.log(utenteJSON);

//Cerchiamo di capire come aggiungere un metodo ad un oggetto una volta che lo abbiamo ricevuto formato JSON e "tradotto" in formato Javascript

var objRicevuto = '{"nome": "Paola", "cognome": "Rossi", "presenza": true}';

var obj = JSON.parse(objRicevuto);

console.log(obj);

//voglio aggiungere un metodo a obj
function ObjCostruttore(nome, cognome, presenza){
    this.nome = nome;
    this.cognome = cognome;
    this.presenza = presenza;
    // this.annullaPresenza = function( ){
    //     !this.presenza;
    // }
}

var objVero = new ObjCostruttore(obj.nome, obj.cognome, obj.presenza);

ObjCostruttore.prototype.annullaPresenza = function(){
    this.presenza = false;
}

objVero.annullaPresenza();

console.log(objVero);


