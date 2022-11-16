function scriviInConsole(){
    console.log('iao ragazzi');
    // demo.innerHTML = "<p>Andiamo in PAUSA</p>";
    demo.innerHTML += "<p>Andiamo in PAUSA</p>";
    contatore++;
    console.log(contatore);
}

var contatore = 0;

var demo = document.getElementById('demo');