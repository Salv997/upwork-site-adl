// maze //

$('.description-maze li .question').click(function () {
    $(this).find('.fa-chevron-down').toggleClass('collapsed');
    $(this).parent().toggleClass('active');
}); 
$('.description-tito li .question').click(function () {
    $(this).find('.fa-chevron-down').toggleClass('collapsed');
    $(this).parent().toggleClass('active');
}); 
$('.description-kouyou li .question').click(function () {
    $(this).find('.fa-chevron-down').toggleClass('collapsed');
    $(this).parent().toggleClass('active');
}); 
$('.description-almadra li .question').click(function () {
    $(this).find('.fa-chevron-down').toggleClass('collapsed');
    $(this).parent().toggleClass('active');
}); 

var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivsMaze(n) {
    showDivs(slideIndex += n);
    }

    function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide-maze");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

            
let numero = 1;
function aggiungiNumeroMaze() {
    var numeroDiv = document.getElementById("cambia-numero-maze");
    numero++;
    if(numero > 3) {
    numero = 1;
    }
    numeroDiv.innerHTML = numero.toString();
}
function decrementaNumeroMaze() {
    var numeroDiv = document.getElementById("cambia-numero-maze");
    numero--;
    if(numero < 1) {
    numero = 3;
    }
    numeroDiv.innerHTML = numero.toString();
}



// CASABLANCA //
var slideIndexCasablanca = 1;
showDivsCasa(slideIndexCasablanca);

function plusDivsCasablanca(n) {
  showDivsCasa(slideIndexCasablanca += n);
}

function showDivsCasa(n) {
  var i;
  var x = document.getElementsByClassName("slide-casablanca");
  if (n > x.length) {slideIndexCasablanca = 1}
  if (n < 1) {slideIndexCasablanca = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexCasablanca-1].style.display = "block";
}

let numeroCasa = 1;
function aggiungiNumeroCasa() {
    var numeroDivCasa = document.getElementById("cambia-numero-casa");
    numeroCasa++;
    if(numeroCasa > 3) {
    numeroCasa = 1;
    }
    numeroDivCasa.innerHTML = numeroCasa.toString();
}
function decrementaNumeroCasa() {
    var numeroDivCasa = document.getElementById("cambia-numero-casa");
    numeroCasa--;
    if(numeroCasa < 1) {
    numeroCasa = 3;
    }
    numeroDivCasa.innerHTML = numeroCasa.toString();
}


// TITO //
var slideIndexTito = 1;
showDivsTito(slideIndexTito);

function plusDivsTito(n) {
  showDivsTito(slideIndexTito += n);
}

function showDivsTito(n) {
  var i;
  var x = document.getElementsByClassName("slide-tito");
  if (n > x.length) {slideIndexTito = 1}
  if (n < 1) {slideIndexTito = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexTito-1].style.display = "block";
}

let numeroTito = 1;
function aggiungiNumeroTito() {
    var numeroDivTito = document.getElementById("cambia-numero-tito");
    numeroTito++;
    if(numeroTito > 3) {
    numeroTito = 1;
    }
    numeroDivTito.innerHTML = numeroTito.toString();
}
function decrementaNumeroTito() {
    var numeroDivTito = document.getElementById("cambia-numero-tito");
    numeroTito--;
    if(numeroTito < 1) {
    numeroTito = 3;
    }
    numeroDivTito.innerHTML = numeroTito.toString();
}



// ARASHI //
var slideIndexArashi = 1;
showDivsArashi(slideIndexArashi);

function plusDivsArashi(n) {
  showDivsArashi(slideIndexArashi += n);
}

function showDivsArashi(n) {
  var i;
  var x = document.getElementsByClassName("slide-arashi");
  if (n > x.length) {slideIndexArashi = 1}
  if (n < 1) {slideIndexArashi = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexArashi-1].style.display = "block";
}
let numeroArashi = 1;
function aggiungiNumeroArashi() {
    var numeroDivTito = document.getElementById("cambia-numero-arashi");
    numeroArashi++;
    if(numeroArashi > 3) {
    numeroArashi = 1;
    }
    numeroDivTito.innerHTML = numeroArashi.toString();
}
function decrementaNumeroArashi() {
    var numeroDivTito = document.getElementById("cambia-numero-arashi");
    numeroArashi--;
    if(numeroArashi < 1) {
    numeroArashi = 3;
    }
    numeroDivTito.innerHTML = numeroArashi.toString();
}


// KOUYOU //
var slideIndexKouyou = 1;
showDivsKouyou(slideIndexKouyou);

function plusDivsKouyou(n) {
  showDivsKouyou(slideIndexKouyou += n);
}

function showDivsKouyou(n) {
  var i;
  var x = document.getElementsByClassName("slide-kouyou");
  if (n > x.length) {slideIndexKouyou = 1}
  if (n < 1) {slideIndexKouyou = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexKouyou-1].style.display = "block";
}
let numeroKouyou = 1;
function aggiungiNumeroKouyou() {
    var numeroDivKouyou = document.getElementById("cambia-numero-kouyou");
    numeroKouyou++;
    if(numeroKouyou > 3) {
    numeroKouyou = 1;
    }
    numeroDivKouyou.innerHTML = numeroKouyou.toString();
}
function decrementaNumeroKouyou() {
    var numeroDivTito = document.getElementById("cambia-numero-kouyou");
    numeroKouyou--;
    if(numeroKouyou < 1) {
    numeroKouyou = 3;
    }
    numeroDivKouyou.innerHTML = numeroKouyou.toString();
}


// ALMADRA //
var slideIndexAlmadra = 1;
showDivsAlmadra(slideIndexAlmadra);

function plusDivsAlmadra(n) {
  showDivsAlmadra(slideIndexAlmadra += n);
}

function showDivsAlmadra(n) {
  var i;
  var x = document.getElementsByClassName("slide-almadra");
  if (n > x.length) {slideIndexAlmadra = 1}
  if (n < 1) {slideIndexAlmadra = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexAlmadra-1].style.display = "block";
}
let numeroAlmadra = 1;
function aggiungiNumeroAlmadra() {
    var numeroDivAlmadra = document.getElementById("cambia-numero-almadra");
    numeroAlmadra++;
    if(numeroAlmadra > 3) {
    numeroAlmadra = 1;
    }
    numeroDivAlmadra.innerHTML = numeroAlmadra.toString();
}
function decrementaNumeroAlmadra() {
    var numeroDivTito = document.getElementById("cambia-numero-almadra");
    numeroAlmadra--;
    if(numeroAlmadra < 1) {
    numeroAlmadra = 3;
    }
    numeroDivAlmadra.innerHTML = numeroAlmadra.toString();
}