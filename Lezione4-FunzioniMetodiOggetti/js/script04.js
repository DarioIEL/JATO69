// notazione letterale 
var studente = {
    //proprietà rispettano il principio chiave-valore. Sono separate da virgole
    nome: "Pippo",
    cognome: "Rossi",
    eta: 30,
    promosso: true,
    matricola: 123,
    dataNascita: new Date("05/12/1992").getFullYear(),
    esamiRestanti: ['Programmazione2', 'Algoritmi0', ' Tecniche ing software'],

    //zaino: Object() dentro studente:Object()
    zaino: {
        marca: "Carpisa",
        capacità: 15,
        contenuto: ['Computer', 'penna', 'caricabatterie']
        },
    
    //metodi
    superaEsame: function(esame, voto){
        // console.log('Bravo ' + this.nome + ", hai superato l'esame");
        this.esame = esame;
        this.voto = voto;

        var msg = '';

        if(this.voto >= 18){
            msg = 'Bravo, ' + this.nome + ". Hai superato " + this.esame + ". Votazione: " + this.voto;
        }else{
            msg = 'Mi dispiace, non hai superato: ' +  this.esame;
        }

        return msg;
    },
    
    presentati(){
        // console.log(this.nome +  " " + this.cognome + " -  Matr: " + this.matricola);
        var msg = "Ciao mi chiamo " + this.nome + " " + this.cognome;
        msg += "<br> Matricola: " + this.matricola;
        msg += "<br> Mi restano i seguenti esami: <br>";

        this.esamiRestanti.forEach(esame => {
            msg += "<li>" + esame + "</li>"
        });

        return msg;
     }

}

//richiamo metodi o propr

console.log(studente.presentati());
studente.superaEsame();

console.log(studente.dataNascita);

console.log(studente.zaino.marca);

for(var i = 0; i < studente.zaino.contenuto.length; i++){
    console.log(studente.zaino.contenuto[i]);
}


var demo = document.getElementById('demo');

demo.innerHTML = studente.presentati();

demo.innerHTML += studente.superaEsame("Telecomunicazioni", "17");

// console.log(studente.voto);
// console.log(studente.esame);


//FOREACH
var mioArr = ['casa', 'penna', 'computer', 'chiesa'];

mioArr.forEach(element => {
    console.log(element);
});

//traduzione
mioArr.forEach(function(element){
    console.log(element);
});


//FORIN - tarato per gli object
console.log(studente['nome']); //sostituisce la notazione punto 

for (const prop in studente) {
    if(typeof studente[prop] != 'function'){
        console.log(prop + ": " + studente[prop]);
    }
}

//NOTAZIONE JSON - JavaScript Object Notation

//trasformo il mio Obj in un obj formato JSON 
var mioObjJSON = JSON.stringify(studente);

console.log(mioObjJSON);

//trasformo da JSON a obj
var mioJSON = '{"userId": 1, "id": 1, "title": "sunt aut facere repellat provident caecati excepturi optio reprehenderit", "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto" }';

var mioOBJ = JSON.parse(mioJSON);

//solo dopo averlo trasformato posso recuperare le propr del mio obj
console.log(mioOBJ.body);
console.log(mioOBJ.userId);
console.log(mioOBJ.title);


