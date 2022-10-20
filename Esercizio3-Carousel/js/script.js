var immagini = [
    './img/Dino1.jpg',
    './img/Dino2.jfif',
    './img/Dino3.webp',
];

var elImmagine = document.getElementById('immagine');

elImmagine.innerHTML = "<img id='immagineDino' src='" + immagini[2] +"' >";