function calcola(){
    var num1 = recuperaNumeri()[0];
    var num2 = recuperaNumeri()[1];

    var somma = num1+num2;
    var moltiplicazione = num1 * num2;
    var sottrazione = num1 - num2;
    var divisione = num1 / num2;

    stampaNellaPagina(somma, moltiplicazione, sottrazione, divisione);
}

function recuperaNumeri(){
    var num1 = Number( document.getElementById('num1').value );
    var num2 = Number(document.getElementById('num2').value );
    return [num1, num2];
}

function stampaNellaPagina(som,mol,sot,div){
    var demo = document.getElementById('demo');
    demo.innerHTML = '<p> La somma vale: ' + som +"</p>" +
    "<p> La moltiplicazione vale: " + mol + "</p>" +
    "<p> La sottrazione vale: " + sot + "</p>" +
    "<p> La divisione vale: " + div + "</p>" ;
}

//recupero il button
var btn = document.getElementById('btn');

//aggancio al pulsante la mia funzione. Il nome della funzione dovrà essere richiamato senza le parentesi tonde
btn.onclick = calcola;
