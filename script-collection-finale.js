// TOP BTN //
var btn = $('#topbtn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});


// TOGGLE DESCRIZIONE //
const description = document.querySelectorAll(".description");
description.forEach((desc) => {
  desc.addEventListener("click", () => {
    desc.classList.toggle("active");
  })
})

// maze //
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
    if(numero > 2) {
    numero = 1;
    }
    numeroDiv.innerHTML = numero.toString();
}
function decrementaNumeroMaze() {
    var numeroDiv = document.getElementById("cambia-numero-maze");
    numero--;
    if(numero < 1) {
    numero = 2;
    }
    numeroDiv.innerHTML = numero.toString();
}

// casablanca //
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
    if(numeroCasa > 2) {
    numeroCasa = 1;
    }
    numeroDivCasa.innerHTML = numeroCasa.toString();
}
function decrementaNumeroCasa() {
    var numeroDivCasa = document.getElementById("cambia-numero-casa");
    numeroCasa--;
    if(numeroCasa < 1) {
    numeroCasa = 2;
    }
    numeroDivCasa.innerHTML = numeroCasa.toString();
}


// diriyah //
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
    if(numeroTito > 2) {
    numeroTito = 1;
    }
    numeroDivTito.innerHTML = numeroTito.toString();
}
function decrementaNumeroTito() {
    var numeroDivTito = document.getElementById("cambia-numero-tito");
    numeroTito--;
    if(numeroTito < 1) {
    numeroTito = 2;
    }
    numeroDivTito.innerHTML = numeroTito.toString();
}


// zahir //
var slideIndexZahir = 1;
showDivsZahir(slideIndexZahir);

function plusDivsZahir(n) {
  showDivsZahir(slideIndexZahir += n);
}

function showDivsZahir(n) {
  var i;
  var x = document.getElementsByClassName("slide-zahir");
  if (n > x.length) {slideIndexZahir = 1}
  if (n < 1) {slideIndexZahir = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexZahir-1].style.display = "block";
}

let numeroZahir = 1;
function aggiungiNumeroZahir() {
    var numeroDivZahir = document.getElementById("cambia-numero-zahir");
    numeroZahir++;
    if(numeroZahir > 2) {
    numeroZahir = 1;
    }
    numeroDivZahir.innerHTML = numeroZahir.toString();
}
function decrementaNumeroZahir() {
    var numeroDivZahir = document.getElementById("cambia-numero-zahir");
    numeroZahir--;
    if(numeroZahir< 1) {
    numeroZahir = 2;
    }
    numeroDivZahir.innerHTML = numeroZahir.toString();
}

// marea //
var slideIndexMarea = 1;
showDivsMarea(slideIndexMarea);

function plusDivsMarea(n) {
  showDivsMarea(slideIndexMarea += n);
}

function showDivsMarea(n) {
  var i;
  var x = document.getElementsByClassName("slide-marea");
  if (n > x.length) {slideIndexMarea = 1}
  if (n < 1) {slideIndexMarea = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexMarea-1].style.display = "block";
}

let numeroMarea = 1;
function aggiungiNumeroMarea() {
    var numeroDivMarea = document.getElementById("cambia-numero-marea");
    numeroMarea++;
    if(numeroMarea > 3) {
    numeroMarea = 1;
    }
    numeroDivMarea.innerHTML = numeroMarea.toString();
}
function decrementaNumeroMarea() {
    var numeroDivMarea = document.getElementById("cambia-numero-marea");
    numeroMarea--;
    if(numeroMarea< 1) {
    numeroMarea = 3;
    }
    numeroDivMarea.innerHTML = numeroMarea.toString();
}


// mustique //
var slideIndexMustique = 1;
showDivsMustique(slideIndexMustique);

function plusDivsMustique(n) {
  showDivsMustique(slideIndexMustique += n);
}

function showDivsMustique(n) {
  var i;
  var x = document.getElementsByClassName("slide-mustique");
  if (n > x.length) {slideIndexMustique = 1}
  if (n < 1) {slideIndexMustique = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexMustique-1].style.display = "block";
}

let numeroMustique = 1;
function aggiungiNumeroMustique() {
    var numeroDivMustique = document.getElementById("cambia-numero-mustique");
    numeroMustique++;
    if(numeroMustique > 2) {
    numeroMustique = 1;
    }
    numeroDivMustique.innerHTML = numeroMustique.toString();
}
function decrementaNumeroMustique() {
    var numeroDivMustique = document.getElementById("cambia-numero-mustique");
    numeroMustique--;
    if(numeroMustique< 1) {
    numeroMustique = 2;
    }
    numeroDivMustique.innerHTML = numeroMustique.toString();
}



// kouyou //
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
    if(numeroKouyou > 2) {
    numeroKouyou = 1;
    }
    numeroDivKouyou.innerHTML = numeroKouyou.toString();
}
function decrementaNumeroKouyou() {
    var numeroDivKouyou = document.getElementById("cambia-numero-kouyou");
    numeroKouyou--;
    if(numeroKouyou < 1) {
    numeroKouyou = 2;
    }
    numeroDivKouyou.innerHTML = numeroKouyou.toString();
}


// lola //
var slideIndexLola = 1;
showDivsLola(slideIndexLola);

function plusDivsLola(n) {
  showDivsLola(slideIndexLola += n);
}

function showDivsLola(n) {
  var i;
  var x = document.getElementsByClassName("slide-lola");
  if (n > x.length) {slideIndexLola = 1}
  if (n < 1) {slideIndexLola = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexLola-1].style.display = "block";
}
let numeroLola = 1;
function aggiungiNumeroLola() {
    var numeroDivLola = document.getElementById("cambia-numero-lola");
    numeroLola++;
    if(numeroLola > 2) {
    numeroLola = 1;
    }
    numeroDivLola.innerHTML = numeroLola.toString();
}
function decrementaNumeroLola() {
    var numeroDivLola = document.getElementById("cambia-numero-lola");
    numeroLola--;
    if(numeroLola < 1) {
    numeroLola = 2;
    }
    numeroDivLola.innerHTML = numeroLola.toString();
}


// zahirmoka //
var slideIndexMoka = 1;
showDivsMoka(slideIndexMoka);

function plusDivsMoka(n) {
  showDivsMoka(slideIndexMoka += n);
}

function showDivsMoka(n) {
  var i;
  var x = document.getElementsByClassName("slide-moka");
  if (n > x.length) {slideIndexMoka = 1}
  if (n < 1) {slideIndexMoka = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexMoka-1].style.display = "block";
}
let numeroMoka = 1;
function aggiungiNumeroMoka() {
    var numeroDivMoka = document.getElementById("cambia-numero-moka");
    numeroMoka++;
    if(numeroMoka > 2) {
    numeroMoka = 1;
    }
    numeroDivMoka.innerHTML = numeroMoka.toString();
}
function decrementaNumeroMoka() {
    var numeroDivMoka = document.getElementById("cambia-numero-moka");
    numeroMoka--;
    if(numeroMoka < 1) {
    numeroMoka = 2;
    }
    numeroDivMoka.innerHTML = numeroMoka.toString();
}


// mesanpar //
var slideIndexMesanpar = 1;
showDivsMesanpar(slideIndexMesanpar);

function plusDivsMesanpar(n) {
  showDivsMesanpar(slideIndexMesanpar += n);
}

function showDivsMesanpar(n) {
  var i;
  var x = document.getElementsByClassName("slide-mesanpar");
  if (n > x.length) {slideIndexMesanpar = 1}
  if (n < 1) {slideIndexMesanpar = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexMesanpar-1].style.display = "block";
}
let numeroMesanpar = 1;
function aggiungiNumeroMesanpar() {
    var numeroDivMesanpar = document.getElementById("cambia-numero-mesanpar");
    numeroMesanpar++;
    if(numeroMesanpar > 2) {
    numeroMesanpar = 1;
    }
    numeroDivMesanpar.innerHTML = numeroMesanpar.toString();
}
function decrementaNumeroMesanpar() {
    var numeroDivMesanpar = document.getElementById("cambia-numero-mesanpar");
    numeroMesanpar--;
    if(numeroMesanpar < 1) {
    numeroMesanpar = 2;
    }
    numeroDivMesanpar.innerHTML = numeroMesanpar.toString();
}


// maze sapphire //
var slideIndexSapphire = 1;
showDivsSapphire(slideIndexSapphire);

function plusDivsSapphire(n) {
  showDivsSapphire(slideIndexSapphire += n);
}

function showDivsSapphire(n) {
  var i;
  var x = document.getElementsByClassName("slide-sapphire");
  if (n > x.length) {slideIndexSapphire = 1}
  if (n < 1) {slideIndexSapphire = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexSapphire-1].style.display = "block";
}
let numeroSapphire = 1;
function aggiungiNumeroSapphire() {
    var numeroDivSapphire = document.getElementById("cambia-numero-sapphire");
    numeroSapphire++;
    if(numeroSapphire > 2) {
    numeroSapphire = 1;
    }
    numeroDivSapphire.innerHTML = numeroSapphire.toString();
}
function decrementaNumeroSapphire() {
    var numeroDivSapphire = document.getElementById("cambia-numero-sapphire");
    numeroSapphire--;
    if(numeroSapphire < 1) {
    numeroSapphire = 2;
    }
    numeroDivSapphire.innerHTML = numeroSapphire.toString();
}


// mustique coral //
var slideIndexCoral = 1;
showDivsCoral(slideIndexCoral);

function plusDivsCoral(n) {
  showDivsCoral(slideIndexCoral += n);
}

function showDivsCoral(n) {
  var i;
  var x = document.getElementsByClassName("slide-coral");
  if (n > x.length) {slideIndexCoral = 1}
  if (n < 1) {slideIndexCoral = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexCoral-1].style.display = "block";
}
let numeroCoral = 1;
function aggiungiNumeroCoral() {
    var numeroDivCoral = document.getElementById("cambia-numero-coral");
    numeroCoral++;
    if(numeroCoral > 2) {
    numeroCoral = 1;
    }
    numeroDivCoral.innerHTML = numeroCoral.toString();
}
function decrementaNumeroCoral() {
    var numeroDivCoral = document.getElementById("cambia-numero-coral");
    numeroCoral--;
    if(numeroCoral < 1) {
    numeroCoral = 2;
    }
    numeroDivCoral.innerHTML = numeroCoral.toString();
}


// almadra //
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
    if(numeroAlmadra > 2) {
    numeroAlmadra = 1;
    }
    numeroDivAlmadra.innerHTML = numeroAlmadra.toString();
}
function decrementaNumeroAlmadra() {
    var numeroDivAlmadra = document.getElementById("cambia-numero-almadra");
    numeroAlmadra--;
    if(numeroAlmadra < 1) {
    numeroAlmadra = 2;
    }
    numeroDivAlmadra.innerHTML = numeroAlmadra.toString();
}


// lola pine //
var slideIndexPine = 1;
showDivsPine(slideIndexPine);

function plusDivsPine(n) {
  showDivsPine(slideIndexPine += n);
}

function showDivsPine(n) {
  var i;
  var x = document.getElementsByClassName("slide-pine");
  if (n > x.length) {slideIndexPine = 1}
  if (n < 1) {slideIndexPine = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexPine-1].style.display = "block";
}
let numeroPine = 1;
function aggiungiNumeroPine() {
    var numeroDivPine = document.getElementById("cambia-numero-pine");
    numeroPine++;
    if(numeroPine > 2) {
    numeroPine = 1;
    }
    numeroDivPine.innerHTML = numeroPine.toString();
}
function decrementaNumeroPine() {
    var numeroDivPine = document.getElementById("cambia-numero-pine");
    numeroPine--;
    if(numeroPine < 1) {
    numeroPine = 2;
    }
    numeroDivPine.innerHTML = numeroPine.toString();
}


// nomansland //
var slideIndexNomansland = 1;
showDivsNomansland(slideIndexNomansland);

function plusDivsNomansland(n) {
  showDivsNomansland(slideIndexNomansland += n);
}

function showDivsNomansland(n) {
  var i;
  var x = document.getElementsByClassName("slide-nomansland");
  if (n > x.length) {slideIndexNomansland = 1}
  if (n < 1) {slideIndexNomansland = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexNomansland-1].style.display = "block";
}
let numeroNomansland = 1;
function aggiungiNumeroNomansland() {
    var numeroDivNomansland = document.getElementById("cambia-numero-nomansland");
    numeroNomansland++;
    if(numeroNomansland > 2) {
    numeroNomansland = 1;
    }
    numeroDivNomansland.innerHTML = numeroNomansland.toString();
}
function decrementaNumeroNomansland() {
    var numeroDivNomansland = document.getElementById("cambia-numero-nomansland");
    numeroNomansland--;
    if(numeroNomansland < 1) {
    numeroNomansland = 2;
    }
    numeroDivNomansland.innerHTML = numeroNomansland.toString();
}


// komorebi //
var slideIndexKomorebi = 1;
showDivsKomorebi(slideIndexKomorebi);

function plusDivsKomorebi(n) {
  showDivsKomorebi(slideIndexKomorebi += n);
}

function showDivsKomorebi(n) {
  var i;
  var x = document.getElementsByClassName("slide-komorebi");
  if (n > x.length) {slideIndexKomorebi = 1}
  if (n < 1) {slideIndexKomorebi = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexKomorebi-1].style.display = "block";
}
let numeroKomorebi = 1;
function aggiungiNumeroKomorebi() {
    var numeroDivKomorebi = document.getElementById("cambia-numero-komorebi");
    numeroKomorebi++;
    if(numeroKomorebi > 2) {
    numeroKomorebi = 1;
    }
    numeroDivKomorebi.innerHTML = numeroKomorebi.toString();
}
function decrementaNumeroKomorebi() {
    var numeroDivKomorebi = document.getElementById("cambia-numero-komorebi");
    numeroKomorebi--;
    if(numeroKomorebi < 1) {
    numeroKomorebi = 2;
    }
    numeroDivKomorebi.innerHTML = numeroKomorebi.toString();
}


// flamingo //
var slideIndexFlamingo = 1;
showDivsFlamingo(slideIndexFlamingo);

function plusDivsFlamingo(n) {
  showDivsFlamingo(slideIndexFlamingo += n);
}

function showDivsFlamingo(n) {
  var i;
  var x = document.getElementsByClassName("slide-flamingo");
  if (n > x.length) {slideIndexFlamingo = 1}
  if (n < 1) {slideIndexFlamingo = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexFlamingo-1].style.display = "block";
}
let numeroFlamingo = 1;
function aggiungiNumeroFlamingo() {
    var numeroDivFlamingo = document.getElementById("cambia-numero-flamingo");
    numeroFlamingo++;
    if(numeroFlamingo > 3) {
    numeroFlamingo = 1;
    }
    numeroDivFlamingo.innerHTML = numeroFlamingo.toString();
}
function decrementaNumeroFlamingo() {
    var numeroDivFlamingo = document.getElementById("cambia-numero-flamingo");
    numeroFlamingo--;
    if(numeroFlamingo < 1) {
    numeroFlamingo = 3;
    }
    numeroDivFlamingo.innerHTML = numeroFlamingo.toString();
}


// arashi //
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
    var numeroDivArashi = document.getElementById("cambia-numero-arashi");
    numeroArashi++;
    if(numeroArashi > 2) {
    numeroArashi = 1;
    }
    numeroDivArashi.innerHTML = numeroArashi.toString();
}
function decrementaNumeroArashi() {
    var numeroDivArashi = document.getElementById("cambia-numero-arashi");
    numeroArashi--;
    if(numeroArashi < 1) {
    numeroArashi = 2;
    }
    numeroDivArashi.innerHTML = numeroArashi.toString();
}


// kouyou graphite //
var slideIndexGraphite = 1;
showDivsGraphite(slideIndexGraphite);

function plusDivsGraphite(n) {
  showDivsGraphite(slideIndexGraphite += n);
}

function showDivsGraphite(n) {
  var i;
  var x = document.getElementsByClassName("slide-graphite");
  if (n > x.length) {slideIndexGraphite = 1}
  if (n < 1) {slideIndexGraphite = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexGraphite-1].style.display = "block";
}
let numeroGraphite = 1;
function aggiungiNumeroGraphite() {
    var numeroDivGraphite = document.getElementById("cambia-numero-graphite");
    numeroGraphite++;
    if(numeroGraphite > 2) {
    numeroGraphite = 1;
    }
    numeroDivGraphite.innerHTML = numeroGraphite.toString();
}
function decrementaNumeroGraphite() {
    var numeroDivGraphite = document.getElementById("cambia-numero-graphite");
    numeroGraphite--;
    if(numeroGraphite < 1) {
    numeroGraphite = 2;
    }
    numeroDivGraphite.innerHTML = numeroGraphite.toString();
}


// casablanca burgundy //
var slideIndexBurgundy = 1;
showDivsBurgundy(slideIndexBurgundy);

function plusDivsBurgundy(n) {
  showDivsBurgundy(slideIndexBurgundy += n);
}

function showDivsBurgundy(n) {
  var i;
  var x = document.getElementsByClassName("slide-burgundy");
  if (n > x.length) {slideIndexBurgundy = 1}
  if (n < 1) {slideIndexBurgundy = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexBurgundy-1].style.display = "block";
}
let numeroBurgundy = 1;
function aggiungiNumeroBurgundy() {
    var numeroDivBurgundy = document.getElementById("cambia-numero-burgundy");
    numeroBurgundy++;
    if(numeroBurgundy > 2) {
    numeroBurgundy = 1;
    }
    numeroDivBurgundy.innerHTML = numeroBurgundy.toString();
}
function decrementaNumeroBurgundy() {
    var numeroDivBurgundy = document.getElementById("cambia-numero-burgundy");
    numeroBurgundy--;
    if(numeroBurgundy < 1) {
    numeroBurgundy = 2;
    }
    numeroDivBurgundy.innerHTML = numeroBurgundy.toString();
}


// komorebi pine //
var slideIndexKpine = 1;
showDivsKpine(slideIndexKpine);

function plusDivsKpine(n) {
  showDivsKpine(slideIndexKpine += n);
}

function showDivsKpine(n) {
  var i;
  var x = document.getElementsByClassName("slide-kpine");
  if (n > x.length) {slideIndexKpine = 1}
  if (n < 1) {slideIndexKpine = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexKpine-1].style.display = "block";
}
let numeroKpine = 1;
function aggiungiNumeroKpine() {
    var numeroDivKpine = document.getElementById("cambia-numero-kpine");
    numeroKpine++;
    if(numeroKpine > 2) {
    numeroKpine = 1;
    }
    numeroDivKpine.innerHTML = numeroKpine.toString();
}
function decrementaNumeroKpine() {
    var numeroDivKpine = document.getElementById("cambia-numero-kpine");
    numeroKpine--;
    if(numeroKpine < 1) {
    numeroKpine = 2;
    }
    numeroDivKpine.innerHTML = numeroKpine.toString();
}


// almadra aquamarine //
var slideIndexAquamarine = 1;
showDivsAquamarine(slideIndexAquamarine);

function plusDivsAquamarine(n) {
  showDivsAquamarine(slideIndexAquamarine += n);
}

function showDivsAquamarine(n) {
  var i;
  var x = document.getElementsByClassName("slide-aquamarine");
  if (n > x.length) {slideIndexAquamarine = 1}
  if (n < 1) {slideIndexAquamarine = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexAquamarine-1].style.display = "block";
}
let numeroAquamarine = 1;
function aggiungiNumeroAquamarine() {
    var numeroDivAquamarine = document.getElementById("cambia-numero-aquamarine");
    numeroAquamarine++;
    if(numeroAquamarine > 2) {
    numeroAquamarine = 1;
    }
    numeroDivAquamarine.innerHTML = numeroAquamarine.toString();
}
function decrementaNumeroAquamarine() {
    var numeroDivAquamarine = document.getElementById("cambia-numero-aquamarine");
    numeroAquamarine--;
    if(numeroAquamarine < 1) {
    numeroAquamarine = 2;
    }
    numeroDivAquamarine.innerHTML = numeroAquamarine.toString();
}


// nomansland denim //
var slideIndexDenim = 1;
showDivsDenim(slideIndexDenim);

function plusDivsDenim(n) {
  showDivsDenim(slideIndexDenim += n);
}

function showDivsDenim(n) {
  var i;
  var x = document.getElementsByClassName("slide-denim");
  if (n > x.length) {slideIndexDenim = 1}
  if (n < 1) {slideIndexDenim = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexDenim-1].style.display = "block";
}
let numeroDenim = 1;
function aggiungiNumeroDenim() {
    var numeroDivDenim = document.getElementById("cambia-numero-denim");
    numeroDenim++;
    if(numeroDenim > 2) {
    numeroDenim = 1;
    }
    numeroDivDenim.innerHTML = numeroDenim.toString();
}
function decrementaNumeroDenim() {
    var numeroDivDenim = document.getElementById("cambia-numero-denim");
    numeroDenim--;
    if(numeroDenim < 1) {
    numeroDenim = 2;
    }
    numeroDivDenim.innerHTML = numeroDenim.toString();
}


// tito ruby //
var slideIndexRuby = 1;
showDivsRuby(slideIndexRuby);

function plusDivsRuby(n) {
  showDivsRuby(slideIndexRuby += n);
}

function showDivsRuby(n) {
  var i;
  var x = document.getElementsByClassName("slide-ruby");
  if (n > x.length) {slideIndexRuby = 1}
  if (n < 1) {slideIndexRuby = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexRuby-1].style.display = "block";
}
let numeroRuby = 1;
function aggiungiNumeroRuby() {
    var numeroDivRuby = document.getElementById("cambia-numero-ruby");
    numeroRuby++;
    if(numeroRuby > 2) {
    numeroRuby = 1;
    }
    numeroDivRuby.innerHTML = numeroRuby.toString();
}
function decrementaNumeroRuby() {
    var numeroDivRuby = document.getElementById("cambia-numero-ruby");
    numeroRuby--;
    if(numeroRuby < 1) {
    numeroRuby = 2;
    }
    numeroDivRuby.innerHTML = numeroRuby.toString();
}


// arashi turq //
var slideIndexTurq = 1;
showDivsTurq(slideIndexTurq);

function plusDivsTurq(n) {
  showDivsTurq(slideIndexTurq += n);
}

function showDivsTurq(n) {
  var i;
  var x = document.getElementsByClassName("slide-turq");
  if (n > x.length) {slideIndexTurq = 1}
  if (n < 1) {slideIndexTurq = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexTurq-1].style.display = "block";
}
let numeroTurq = 1;
function aggiungiNumeroTurq() {
    var numeroDivTurq = document.getElementById("cambia-numero-turq");
    numeroTurq++;
    if(numeroTurq > 2) {
    numeroTurq = 1;
    }
    numeroDivTurq.innerHTML = numeroTurq.toString();
}
function decrementaNumeroTurq() {
    var numeroDivTurq = document.getElementById("cambia-numero-turq");
    numeroTurq--;
    if(numeroTurq < 1) {
    numeroTurq = 2;
    }
    numeroDivTurq.innerHTML = numeroTurq.toString();
}
