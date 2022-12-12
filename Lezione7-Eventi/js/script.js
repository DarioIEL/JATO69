
var user = {
    nome: "Dario",
    ruolo: "Amministratore",
    password: "12345",
    token: "DarioAmm123Fjdm4lojfco9dopjcvi89rewoi"
}

const REGEX = /^[A-Z]{8}[0-9]{3}[A-Z][a-z]{3} *$/

function login(){

    verificaTipoConnessione();

    mioUserJSON = JSON.stringify(user);
    localStorage.setItem("utenteLoggato", mioUserJSON);
    verificaConnessione();

}

// login();

function verificaTipoConnessione(){
    var checkbox = document.querySelector('#checkbox');
    if(checkbox.checked){
        localStorage.setItem('nome', user.nome);
    }else{
        sessionStorage.setItem('nome', user.nome);
    }
}

function logout(){
    localStorage.removeItem("utenteLoggato");
    sessionStorage.removeItem("nome");
    verificaConnessione();
}

// logout();

function validate(){
    if(user.token.match(REGEX)){
        login();
    }else{
        registrati();
    };
}

function verificaConnessione(){
    if(localStorage.getItem("utenteLoggato")){
        // var nomeUtente = (JSON.parse(localStorage.getItem("utenteLoggato"))).nome;
        var mioUtente = JSON.parse(localStorage.getItem('utenteLoggato'));
        var nomeUtente = mioUtente.nome;

        document.querySelector('#demo').innerHTML = "Ciao Utente: " + nomeUtente
    }else{
        document.querySelector('#demo').innerHTML = "Effettua le operazioni di Login"

    }
}


btnLogin = document.querySelector('#btnLogin');
btnLogout = document.querySelector('#btnLogout');

btnLogin.addEventListener('click', login);
btnLogout.addEventListener('click', logout);

verificaConnessione();