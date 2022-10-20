// var demo = document.getElementById('demo');

// function miaFunzione(){
//     //recupero quello che scrive l'utente
//     var nomeUtente = document.getElementById('nomeUtente').value;
//     // demo.innerHTML = "Ciao " + nomeUtente;

//     //impedire all'utente di cliccare il pulsante con un campo vuoto
//     if(nomeUtente.trim() == ''){
//         demo.innerHTML = 'Caro utente, non hai scritto niente';
//     }else{
//         demo.innerHTML = "Ciao " + nomeUtente;
//     }

//     //pulisco il campo input;
//     document.getElementById('nomeUtente').value = '';
// }

var demo = document.getElementById('demo');

function miaFunzione() {
    //recupero quello che scrive l'utente
    var nomeUtente = document.getElementById('nomeUtente').value;
    var mailUtente = document.getElementById('mailUtente').value;

    //impedire all'utente di cliccare il pulsante con un campo vuoto
    if (nomeUtente.trim() == '' && mailUtente.trim() == '') {
        demo.innerHTML = 'Caro utente, non hai scritto niente';
    } else if (nomeUtente.trim() == '' && mailUtente.trim() != '') {
        demo.innerHTML = 'Caro utente, hai dimenticato il nome';
    } else if (nomeUtente.trim() != '' && mailUtente.trim() == '') {
        demo.innerHTML = 'Caro utente, hai dimenticato la mail';
    } else {
        demo.innerHTML = "Ciao " + nomeUtente + "<br>La tua mail è : " + mailUtente;
        //pulisco il campo input;
        document.getElementById('nomeUtente').value = '';
        document.getElementById('mailUtente').value = '';
    }
}