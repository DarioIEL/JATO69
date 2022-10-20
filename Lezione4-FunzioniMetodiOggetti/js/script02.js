function calcolaArea(altezza, larghezza){
    var area = altezza * larghezza;
    return area;
}

// var miaArea = calcolaArea(4,5);
// console.log(miaArea);

var area = calcolaArea(4,5);
console.log(area);

function calcolaVolume(altezza, larghezza, profondita){
    //utilizzo la funzione calcolaArea per calcolare la superficie
    var superficie = calcolaArea(altezza, larghezza);
    var volume = superficie * profondita;
    return volume;
}


console.log( calcolaVolume(4,5,6) );


//Variabili funzionali

var miaArea2 = function(altezza,larghezza){

    return altezza * larghezza;
}


console.log( miaArea2(3,8) );