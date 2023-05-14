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
var timer;
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
      clearTimeout(timer);
      timer = setTimeout(function() {
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1}
        showDivs(slideIndex);
      }, 5000);
  }   
  showDivs(slideIndex);

// CASABLANCA
var slideIndexCasablanca = 1;
var timerCasa;
function plusDivsCasablanca(n) {
  showDivsCasa(slideIndexCasablanca += n);
}
function showDivsCasa(n) {
  var i;
  var x = document.getElementsByClassName("slide-casablanca");
  if (n > x.length) { slideIndexCasablanca = 1; }
  if (n < 1) { slideIndexCasablanca = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexCasablanca - 1].style.display = "block";
  clearTimeout(timerCasa);
  timerCasa = setTimeout(function() {
    slideIndexCasablanca++;
    if (slideIndexCasablanca > x.length) {
      slideIndexCasablanca = 1;
    }
    showDivsCasa(slideIndexCasablanca);
  }, 2000);
}
function handleDivVisibility(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div CB1 è visibile!");
      showDivsCasa(slideIndexCasablanca);
    }
  });
}
const divToObserve = document.querySelector("#CB1");
const observer = new IntersectionObserver(handleDivVisibility);
observer.observe(divToObserve);

// DIRYAH
var slideIndexTito = 1;
var timerTito;
function plusDivsTito(n) {
  showDivsTito(slideIndexTito += n);
}
function showDivsTito(n) {
  var i;
  var x = document.getElementsByClassName("slide-tito");
  if (n > x.length) { slideIndexTito = 1; }
  if (n < 1) { slideIndexTito = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexTito - 1].style.display = "block";
  clearTimeout(timerTito);
  timerTito = setTimeout(function() {
    slideIndexTito++;
    if (slideIndexTito > x.length) {
      slideIndexTito = 1;
    }
    showDivsTito(slideIndexTito);
  }, 2000);
}
function handleDivVisibilityTito(entries, observerTito) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div TT1 è visibile!");
      showDivsTito(slideIndexTito);
    }
  });
}
const divToObserveTito = document.querySelector("#TT1");
const observerTito = new IntersectionObserver(handleDivVisibilityTito);
observerTito.observe(divToObserveTito);

// ZAHIR
var slideIndexZahir = 1;
var timerZahir;
function plusDivsZahir(n) {
  showDivsZahir(slideIndexZahir += n);
}
function showDivsZahir(n) {
  var i;
  var x = document.getElementsByClassName("slide-zahir");
  if (n > x.length) { slideIndexZahir = 1; }
  if (n < 1) { slideIndexZahir = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexZahir - 1].style.display = "block";
  clearTimeout(timerZahir);
  timerZahir = setTimeout(function() {
    slideIndexZahir++;
    if (slideIndexZahir > x.length) {
      slideIndexZahir = 1;
    }
    showDivsZahir(slideIndexZahir);
  }, 2000);
}
function handleDivVisibilityZahir(entries, observerZahir) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div ZH1 è visibile!");
      showDivsZahir(slideIndexZahir);
    }
  });
}
const divToObserveZahir = document.querySelector("#ZH1");
const observerZahir = new IntersectionObserver(handleDivVisibilityZahir);
observerZahir.observe(divToObserveZahir);

// MAREA
var slideIndexMarea = 1;
var timerMarea;
function plusDivsMarea(n) {
  showDivsMarea(slideIndexMarea += n);
}
function showDivsMarea(n) {
  var i;
  var x = document.getElementsByClassName("slide-marea");
  if (n > x.length) { slideIndexMarea = 1; }
  if (n < 1) { slideIndexMarea = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexMarea - 1].style.display = "block";
  clearTimeout(timerMarea);
  timerMarea = setTimeout(function() {
    slideIndexMarea++;
    if (slideIndexMarea > x.length) {
      slideIndexMarea = 1;
    }
    showDivsMarea(slideIndexMarea);
  }, 2000);
}
function handleDivVisibilityMarea(entries, observerMarea) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div MR1 è visibile!");
      showDivsMarea(slideIndexMarea);
    }
  });
}
const divToObserveMarea = document.querySelector("#MR1");
const observerMarea = new IntersectionObserver(handleDivVisibilityMarea);
observerMarea.observe(divToObserveMarea);

// MUSTIQUE
var slideIndexMustique = 1;
var timerMustique;
function plusDivsMustique(n) {
  showDivsMustique(slideIndexMustique += n);
}
function showDivsMustique(n) {
  var i;
  var x = document.getElementsByClassName("slide-mustique");
  if (n > x.length) { slideIndexMustique = 1; }
  if (n < 1) { slideIndexMustique = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexMustique - 1].style.display = "block";
  clearTimeout(timerMustique);
  timerMustique = setTimeout(function() {
    slideIndexMustique++;
    if (slideIndexMustique > x.length) {
      slideIndexMustique = 1;
    }
    showDivsMustique(slideIndexMustique);
  }, 2000);
}
function handleDivVisibilityMustique(entries, observerMustique) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div MQ1 è visibile!");
      showDivsMustique(slideIndexMustique);
    }
  });
}
const divToObserveMustique = document.querySelector("#MQ1");
const observerMustique = new IntersectionObserver(handleDivVisibilityMustique);
observerMustique.observe(divToObserveMustique);

// KOUYOU
var slideIndexKouyou = 1;
var timerKouyou;
function plusDivsKouyou(n) {
  showDivsKouyou(slideIndexKouyou += n);
}
function showDivsKouyou(n) {
  var i;
  var x = document.getElementsByClassName("slide-kouyou");
  if (n > x.length) { slideIndexKouyou = 1; }
  if (n < 1) { slideIndexKouyou = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexKouyou - 1].style.display = "block";
  clearTimeout(timerKouyou);
  timerKouyou = setTimeout(function() {
    slideIndexKouyou++;
    if (slideIndexKouyou > x.length) {
      slideIndexKouyou = 1;
    }
    showDivsKouyou(slideIndexKouyou);
  }, 2000);
}
function handleDivVisibilityKouyou(entries, observerKouyou) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div KY1 è visibile!");
      showDivsKouyou(slideIndexKouyou);
    }
  });
}
const divToObserveKouyou = document.querySelector("#KY1");
const observerKouyou = new IntersectionObserver(handleDivVisibilityKouyou);
observerKouyou.observe(divToObserveKouyou);

// LOLA
var slideIndexLola = 1;
var timerLola;
function plusDivsLola(n) {
  showDivsLola(slideIndexLola += n);
}
function showDivsLola(n) {
  var i;
  var x = document.getElementsByClassName("slide-lola");
  if (n > x.length) { slideIndexLola = 1; }
  if (n < 1) { slideIndexLola = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexLola - 1].style.display = "block";
  clearTimeout(timerLola);
  timerLola = setTimeout(function() {
    slideIndexLola++;
    if (slideIndexLola > x.length) {
      slideIndexLola = 1;
    }
    showDivsLola(slideIndexLola);
  }, 2000);
}
function handleDivVisibilityLola(entries, observerLola) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div LL1 è visibile!");
      showDivsLola(slideIndexLola);
    }
  });
}
const divToObserveLola = document.querySelector("#LL1");
const observerLola = new IntersectionObserver(handleDivVisibilityLola);
observerLola.observe(divToObserveLola);

// ZAHIR MOKA
var slideIndexMoka = 1;
var timerMoka;
function plusDivsMoka(n) {
  showDivsMoka(slideIndexMoka += n);
}
function showDivsMoka(n) {
  var i;
  var x = document.getElementsByClassName("slide-moka");
  if (n > x.length) { slideIndexMoka = 1; }
  if (n < 1) { slideIndexMoka = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexMoka - 1].style.display = "block";
  clearTimeout(timerMoka);
  timerMoka = setTimeout(function() {
    slideIndexMoka++;
    if (slideIndexMoka > x.length) {
      slideIndexMoka = 1;
    }
    showDivsMoka(slideIndexMoka);
  }, 2000);
}
function handleDivVisibilityMoka(entries, observerMoka) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div ZH2 è visibile!");
      showDivsMoka(slideIndexMoka);
    }
  });
}
const divToObserveMoka = document.querySelector("#ZH2");
const observerMoka = new IntersectionObserver(handleDivVisibilityMoka);
observerMoka.observe(divToObserveMoka);

// MESANPAR
var slideIndexMesanpar = 1;
var timerMesanpar;
function plusDivsMesanpar(n) {
  showDivsMesanpar(slideIndexMesanpar += n);
}
function showDivsMesanpar(n) {
  var i;
  var x = document.getElementsByClassName("slide-mesanpar");
  if (n > x.length) { slideIndexMesanpar = 1; }
  if (n < 1) { slideIndexMesanpar = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexMesanpar - 1].style.display = "block";
  clearTimeout(timerMesanpar);
  timerMesanpar = setTimeout(function() {
    slideIndexMesanpar++;
    if (slideIndexMesanpar > x.length) {
      slideIndexMesanpar = 1;
    }
    showDivsMesanpar(slideIndexMesanpar);
  }, 2000);
}
function handleDivVisibilityMesanpar(entries, observerMesanpar) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div MS1 è visibile!");
      showDivsMesanpar(slideIndexMesanpar);
    }
  });
}
const divToObserveMesanpar = document.querySelector("#MS1");
const observerMesanpar = new IntersectionObserver(handleDivVisibilityMesanpar);
observerMesanpar.observe(divToObserveMesanpar);

// MAZE SAPPHIRE
var slideIndexSapphire = 1;
var timerSapphire;
function plusDivsSapphire(n) {
  showDivsSapphire(slideIndexSapphire += n);
}
function showDivsSapphire(n) {
  var i;
  var x = document.getElementsByClassName("slide-sapphire");
  if (n > x.length) { slideIndexSapphire = 1; }
  if (n < 1) { slideIndexSapphire = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexSapphire - 1].style.display = "block";
  clearTimeout(timerSapphire);
  timerSapphire = setTimeout(function() {
    slideIndexSapphire++;
    if (slideIndexSapphire > x.length) {
      slideIndexSapphire = 1;
    }
    showDivsSapphire(slideIndexSapphire);
  }, 2000);
}
function handleDivVisibilitySapphire(entries, observerSapphire) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div MZ2 è visibile!");
      showDivsSapphire(slideIndexSapphire);
    }
  });
}
const divToObserveSapphire = document.querySelector("#MZ2");
const observerSapphire = new IntersectionObserver(handleDivVisibilitySapphire);
observerSapphire.observe(divToObserveSapphire);

// MUSTIQUE CORAL
var slideIndexCoral = 1;
var timerCoral;
function plusDivsCoral(n) {
  showDivsCoral(slideIndexCoral += n);
}
function showDivsCoral(n) {
  var i;
  var x = document.getElementsByClassName("slide-coral");
  if (n > x.length) { slideIndexCoral = 1; }
  if (n < 1) { slideIndexCoral = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexCoral - 1].style.display = "block";
  clearTimeout(timerCoral);
  timerCoral = setTimeout(function() {
    slideIndexCoral++;
    if (slideIndexCoral > x.length) {
      slideIndexCoral = 1;
    }
    showDivsCoral(slideIndexCoral);
  }, 2000);
}
function handleDivVisibilityCoral(entries, observerCoral) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div MQ2 è visibile!");
      showDivsCoral(slideIndexCoral);
    }
  });
}
const divToObserveCoral = document.querySelector("#MQ2");
const observerCoral = new IntersectionObserver(handleDivVisibilityCoral);
observerCoral.observe(divToObserveCoral);

// ALMADRA
var slideIndexAlmadra = 1;
var timerAlmadra;
function plusDivsAlmadra(n) {
  showDivsAlmadra(slideIndexAlmadra += n);
}
function showDivsAlmadra(n) {
  var i;
  var x = document.getElementsByClassName("slide-almadra");
  if (n > x.length) { slideIndexAlmadra = 1; }
  if (n < 1) { slideIndexAlmadra = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexAlmadra - 1].style.display = "block";
  clearTimeout(timerAlmadra);
  timerAlmadra = setTimeout(function() {
    slideIndexAlmadra++;
    if (slideIndexAlmadra > x.length) {
      slideIndexAlmadra = 1;
    }
    showDivsAlmadra(slideIndexAlmadra);
  }, 2000);
}
function handleDivVisibilityAlmadra(entries, observerAlmadra) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div AL1 è visibile!");
      showDivsAlmadra(slideIndexAlmadra);
    }
  });
}
const divToObserveAlmadra = document.querySelector("#AL1");
const observerAlmadra = new IntersectionObserver(handleDivVisibilityAlmadra);
observerAlmadra.observe(divToObserveAlmadra);

// LOLA PINE
var slideIndexPine = 1;
var timerPine;
function plusDivsPine(n) {
  showDivsPine(slideIndexPine += n);
}
function showDivsPine(n) {
  var i;
  var x = document.getElementsByClassName("slide-pine");
  if (n > x.length) { slideIndexPine = 1; }
  if (n < 1) { slideIndexPine = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexPine - 1].style.display = "block";
  clearTimeout(timerPine);
  timerPine = setTimeout(function() {
    slideIndexPine++;
    if (slideIndexPine > x.length) {
      slideIndexPine = 1;
    }
    showDivsPine(slideIndexPine);
  }, 2000);
}
function handleDivVisibilityPine(entries, observerPine) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div LL2 è visibile!");
      showDivsPine(slideIndexPine);
    }
  });
}
const divToObservePine = document.querySelector("#LL2");
const observerPine = new IntersectionObserver(handleDivVisibilityPine);
observerPine.observe(divToObservePine);

// NOMANSLAND
var slideIndexNomansland = 1;
var timerNomansland;
function plusDivsNomansland(n) {
  showDivsNomansland(slideIndexNomansland += n);
}
function showDivsNomansland(n) {
  var i;
  var x = document.getElementsByClassName("slide-nomansland");
  if (n > x.length) { slideIndexNomansland = 1; }
  if (n < 1) { slideIndexNomansland = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexNomansland - 1].style.display = "block";
  clearTimeout(timerNomansland);
  timerNomansland = setTimeout(function() {
    slideIndexNomansland++;
    if (slideIndexNomansland > x.length) {
      slideIndexNomansland = 1;
    }
    showDivsNomansland(slideIndexNomansland);
  }, 2000);
}
function handleDivVisibilityNomansland(entries, observerNomansland) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div NS1 è visibile!");
      showDivsNomansland(slideIndexNomansland);
    }
  });
}
const divToObserveNomansland = document.querySelector("#NS1");
const observerNomansland = new IntersectionObserver(handleDivVisibilityNomansland);
observerNomansland.observe(divToObserveNomansland);

// KOMOREBI
var slideIndexKomorebi = 1;
var timerKomorebi;
function plusDivsKomorebi(n) {
  showDivsKomorebi(slideIndexKomorebi += n);
}
function showDivsKomorebi(n) {
  var i;
  var x = document.getElementsByClassName("slide-komorebi");
  if (n > x.length) { slideIndexKomorebi = 1; }
  if (n < 1) { slideIndexKomorebi = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexKomorebi - 1].style.display = "block";
  clearTimeout(timerKomorebi);
  timerKomorebi = setTimeout(function() {
    slideIndexKomorebi++;
    if (slideIndexKomorebi > x.length) {
      slideIndexKomorebi = 1;
    }
    showDivsKomorebi(slideIndexKomorebi);
  }, 2000);
}
function handleDivVisibilityKomorebi(entries, observerKomorebi) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div KR1 è visibile!");
      showDivsKomorebi(slideIndexKomorebi);
    }
  });
}
const divToObserveKomorebi = document.querySelector("#KR1");
const observerKomorebi = new IntersectionObserver(handleDivVisibilityKomorebi);
observerKomorebi.observe(divToObserveKomorebi);

// FLAMINGO
var slideIndexFlamingo = 1;
var timerFlamingo;
function plusDivsFlamingo(n) {
  showDivsFlamingo(slideIndexFlamingo += n);
}
function showDivsFlamingo(n) {
  var i;
  var x = document.getElementsByClassName("slide-flamingo");
  if (n > x.length) { slideIndexFlamingo = 1; }
  if (n < 1) { slideIndexFlamingo = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexFlamingo - 1].style.display = "block";
  clearTimeout(timerFlamingo);
  timerFlamingo = setTimeout(function() {
    slideIndexFlamingo++;
    if (slideIndexFlamingo > x.length) {
      slideIndexFlamingo = 1;
    }
    showDivsFlamingo(slideIndexFlamingo);
  }, 2000);
}
function handleDivVisibilityFlamingo(entries, observerFlamingo) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div MR2 è visibile!");
      showDivsFlamingo(slideIndexFlamingo);
    }
  });
}
const divToObserveFlamingo = document.querySelector("#MR2");
const observerFlamingo = new IntersectionObserver(handleDivVisibilityFlamingo);
observerFlamingo.observe(divToObserveFlamingo);

// ARASHI
var slideIndexArashi = 1;
var timerArashi;
function plusDivsArashi(n) {
  showDivsArashi(slideIndexArashi += n);
}
function showDivsArashi(n) {
  var i;
  var x = document.getElementsByClassName("slide-arashi");
  if (n > x.length) { slideIndexArashi = 1; }
  if (n < 1) { slideIndexArashi = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexArashi - 1].style.display = "block";
  clearTimeout(timerArashi);
  timerArashi = setTimeout(function() {
    slideIndexArashi++;
    if (slideIndexArashi > x.length) {
      slideIndexArashi = 1;
    }
    showDivsArashi(slideIndexArashi);
  }, 2000);
}
function handleDivVisibilityArashi(entries, observerArashi) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div AR1 è visibile!");
      showDivsArashi(slideIndexArashi);
    }
  });
}
const divToObserveArashi = document.querySelector("#AR1");
const observerArashi = new IntersectionObserver(handleDivVisibilityArashi);
observerArashi.observe(divToObserveArashi);

// GRAPHITE
var slideIndexGraphite = 1;
var timerGraphite;
function plusDivsGraphite(n) {
  showDivsGraphite(slideIndexGraphite += n);
}
function showDivsGraphite(n) {
  var i;
  var x = document.getElementsByClassName("slide-graphite");
  if (n > x.length) { slideIndexGraphite = 1; }
  if (n < 1) { slideIndexGraphite = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexGraphite - 1].style.display = "block";
  clearTimeout(timerGraphite);
  timerGraphite = setTimeout(function() {
    slideIndexGraphite++;
    if (slideIndexGraphite > x.length) {
      slideIndexGraphite = 1;
    }
    showDivsGraphite(slideIndexGraphite);
  }, 2000);
}
function handleDivVisibilityGraphite(entries, observerGraphite) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div KY2 è visibile!");
      showDivsGraphite(slideIndexGraphite);
    }
  });
}
const divToObserveGraphite = document.querySelector("#KY2");
const observerGraphite = new IntersectionObserver(handleDivVisibilityGraphite);
observerGraphite.observe(divToObserveGraphite);

// BURGUNDY
var slideIndexBurgundy = 1;
var timerBurgundy;
function plusDivsBurgundy(n) {
  showDivsBurgundy(slideIndexBurgundy += n);
}
function showDivsBurgundy(n) {
  var i;
  var x = document.getElementsByClassName("slide-burgundy");
  if (n > x.length) { slideIndexBurgundy = 1; }
  if (n < 1) { slideIndexBurgundy = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexBurgundy - 1].style.display = "block";
  clearTimeout(timerBurgundy);
  timerBurgundy = setTimeout(function() {
    slideIndexBurgundy++;
    if (slideIndexBurgundy > x.length) {
      slideIndexBurgundy = 1;
    }
    showDivsBurgundy(slideIndexBurgundy);
  }, 2000);
}
function handleDivVisibilityBurgundy(entries, observerBurgundy) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div CB2 è visibile!");
      showDivsBurgundy(slideIndexBurgundy);
    }
  });
}
const divToObserveBurgundy = document.querySelector("#CB2");
const observerBurgundy = new IntersectionObserver(handleDivVisibilityBurgundy);
observerBurgundy.observe(divToObserveBurgundy);

// PINE
var slideIndexKpine = 1;
var timerKpine;
function plusDivsKpine(n) {
  showDivsKpine(slideIndexKpine += n);
}
function showDivsKpine(n) {
  var i;
  var x = document.getElementsByClassName("slide-kpine");
  if (n > x.length) { slideIndexKpine = 1; }
  if (n < 1) { slideIndexKpine = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexKpine - 1].style.display = "block";
  clearTimeout(timerKpine);
  timerKpine = setTimeout(function() {
    slideIndexKpine++;
    if (slideIndexKpine > x.length) {
      slideIndexKpine = 1;
    }
    showDivsKpine(slideIndexKpine);
  }, 2000);
}
function handleDivVisibilityKpine(entries, observerKpine) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div KR2 è visibile!");
      showDivsKpine(slideIndexKpine);
    }
  });
}
const divToObserveKpine = document.querySelector("#KR2");
const observerKpine = new IntersectionObserver(handleDivVisibilityKpine);
observerKpine.observe(divToObserveKpine);

// AQUAMARINE
var slideIndexAquamarine = 1;
var timerAquamarine;
function plusDivsAquamarine(n) {
  showDivsAquamarine(slideIndexAquamarine += n);
}
function showDivsAquamarine(n) {
  var i;
  var x = document.getElementsByClassName("slide-aquamarine");
  if (n > x.length) { slideIndexAquamarine = 1; }
  if (n < 1) { slideIndexAquamarine = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexAquamarine - 1].style.display = "block";
  clearTimeout(timerAquamarine);
  timerAquamarine = setTimeout(function() {
    slideIndexAquamarine++;
    if (slideIndexAquamarine > x.length) {
      slideIndexAquamarine = 1;
    }
    showDivsAquamarine(slideIndexAquamarine);
  }, 2000);
}
function handleDivVisibilityAquamarine(entries, observerAquamarine) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div AL2 è visibile!");
      showDivsAquamarine(slideIndexAquamarine);
    }
  });
}
const divToObserveAquamarine = document.querySelector("#AL2");
const observerAquamarine = new IntersectionObserver(handleDivVisibilityAquamarine);
observerAquamarine.observe(divToObserveAquamarine);
  
// DENIM
var slideIndexDenim = 1;
var timerDenim;
function plusDivsDenim(n) {
  showDivsDenim(slideIndexDenim += n);
}
function showDivsDenim(n) {
  var i;
  var x = document.getElementsByClassName("slide-denim");
  if (n > x.length) { slideIndexDenim = 1; }
  if (n < 1) { slideIndexDenim = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexDenim - 1].style.display = "block";
  clearTimeout(timerDenim);
  timerDenim = setTimeout(function() {
    slideIndexDenim++;
    if (slideIndexDenim > x.length) {
      slideIndexDenim = 1;
    }
    showDivsDenim(slideIndexDenim);
  }, 2000);
}
function handleDivVisibilityDenim(entries, observerDenim) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div NS2 è visibile!");
      showDivsDenim(slideIndexDenim);
    }
  });
}
const divToObserveDenim = document.querySelector("#NS2");
const observerDenim = new IntersectionObserver(handleDivVisibilityDenim);
observerDenim.observe(divToObserveDenim);
  
// RUBY
var slideIndexRuby = 1;
var timerRuby;
function plusDivsRuby(n) {
  showDivsRuby(slideIndexRuby += n);
}
function showDivsRuby(n) {
  var i;
  var x = document.getElementsByClassName("slide-ruby");
  if (n > x.length) { slideIndexRuby = 1; }
  if (n < 1) { slideIndexRuby = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexRuby - 1].style.display = "block";
  clearTimeout(timerRuby);
  timerRuby = setTimeout(function() {
    slideIndexRuby++;
    if (slideIndexRuby > x.length) {
      slideIndexRuby = 1;
    }
    showDivsRuby(slideIndexRuby);
  }, 2000);
}
function handleDivVisibilityRuby(entries, observerRuby) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div TT2 è visibile!");
      showDivsRuby(slideIndexRuby);
    }
  });
}
const divToObserveRuby = document.querySelector("#TT2");
const observerRuby = new IntersectionObserver(handleDivVisibilityRuby);
observerRuby.observe(divToObserveRuby);

// TURQUOISE
var slideIndexTurq = 1;
var timerTurq;
function plusDivsTurq(n) {
  showDivsTurq(slideIndexTurq += n);
}
function showDivsTurq(n) {
  var i;
  var x = document.getElementsByClassName("slide-turq");
  if (n > x.length) { slideIndexTurq = 1; }
  if (n < 1) { slideIndexTurq = x.length; }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexTurq - 1].style.display = "block";
  clearTimeout(timerTurq);
  timerTurq = setTimeout(function() {
    slideIndexTurq++;
    if (slideIndexTurq > x.length) {
      slideIndexTurq = 1;
    }
    showDivsTurq(slideIndexTurq);
  }, 2000);
}
function handleDivVisibilityTurq(entries, observerTurq) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Il div AR2 è visibile!");
      showDivsTurq(slideIndexTurq);
    }
  });
}
const divToObserveTurq = document.querySelector("#AR2");
const observerTurq = new IntersectionObserver(handleDivVisibilityTurq);
observerTurq.observe(divToObserveTurq);
