function scriviInConsole(){
    console.log('Andiamo in PAUSA');
    // demo.innerHTML = "<p>Andiamo in PAUSA</p>";
    demo.innerHTML += "<p>Andiamo in PAUSA</p>";
    contatore++;
    console.log(contatore);
}

var contatore = 0;

var demo = document.getElementById('demo');