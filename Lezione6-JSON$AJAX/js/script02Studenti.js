var URLStudenti = "http://localhost:3000/studenti";

var elencoStudenti = document.querySelector('#listaStudenti');

function mostraStudenti(listaStudenti){
    listaStudenti.forEach(studente => {
        var id = studente.id;
        var nome = studente.nome;
        var tipo = studente.tipologia;
        
        elencoStudenti.innerHTML += "<li>Studente: " + id + " " + nome + " " + tipo + "</li>";
    });
}

//fetch con metodo POST
function aggiungiNuovoStudente() {

    var nome = document.querySelector('#nome').value;
    var tipologia = document.querySelector('#tipologia').value;
    
    var nuovoStudente = {
        nome: nome,
        tipologia: tipologia
    };

    fetch(URLStudenti, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(nuovoStudente)
        })
        .then(data => {
            data.json()
        })
        .then(response =>{

            console.log("Ok, registrazione avvenuta");
        }
        )

        return false;
}

var form = document.querySelector('#formRegistrazione');
form.addEventListener('submit', aggiungiNuovoStudente);

// var btn = document.querySelector('#btn');
// btn.addEventListener('click', aggiungiNuovoStudente);

fetch(URLStudenti)
    .then(data => {
        return data.json()
    })
    .then(response => {

        console.log(response);
        mostraStudenti(response);
    });


//successivamente all'aggiunta voglio poter eliminare lo studente al click su un pulsante accanto il singolo studente
//endpoint DELETE http://localhost:3000/studenti/idStudente
//la tipologia dello studente può essere scelta partendo da una select : corsista, apprendista, assunto 
//controllare che vengano inseriti tutti i dati altrimenti non viene eseguita la request. Ricorda: event.preventDefault()
