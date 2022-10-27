var immagini = [
    './img/Dino1.jpg',
    './img/Dino2.jfif',
    './img/Dino3.webp',
];

var immagine = document.getElementById('immagine');

contatore = 0;

function mostraImg(contatore){
    immagine.innerHTML = "<img class='dimImg' src='" + immagini[contatore] +"'>";
}

mostraImg(contatore);


function ruotaFoto(){
    contatore++;
    
    if(contatore == immagini.length){
        contatore = 0;
    }

    mostraImg(contatore);
}