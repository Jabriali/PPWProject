/* il seguente codice è stato prelevato dalle dispense fornite dal professor Ambriola
e modificate da me a seguito del progetto*/

/* variabili globali*/
const LARGHEZZZA_FOTO = 598;
var nodoyem;
var nodiArea;
var coordinateAree;
var dimensioneFoto;
var nodoRisultato;
var nodoTito;
var nodoDescrizione;
var nodoImgPlaceholder;

/*gestoreload*/
function gestoreLoad() {
  try {
    nodiArea = document.getElementsByTagName("area");
    nodoyem = document.getElementById("yem");
    nodoRisultato = document.getElementById("risultato");
    nodoTito = document.getElementById("tito");
    nodoDescrizione = document.getElementById("descrizione");
    nodoImgPlaceholder = document.getElementById("ImgPlaceholder");

    coordinateAree = [];
    for (var i = 0; i < nodiArea.length; i++) {
      var nodoArea = nodiArea[i];
      nodoArea.onclick = gestoreClickArea;
      nodoArea.onmouseover = gestoreCursore;
      coordinateAree[i] = nodoArea.coords.split(",");
    }
    dimensioneFoto = LARGHEZZZA_FOTO;
    window.onresize = gestoreResize;
    gestoreResize();
  } catch (e) {
    alert("gestoreLoad " + e);
  }
}
window.onload = gestoreLoad;

/*gestore per ridimensionare le coordinate delle aree*/
function gestoreResize() {
  try {
    var attualeDimensioneFoto = nodoyem.width;
    var ratio = attualeDimensioneFoto / dimensioneFoto;
    for (var i = 0; i < nodiArea.length; i++) {
      for (var j = 0; j < coordinateAree[i].length; j++) {
        coordinateAree[i][j] *= ratio;
      }
      nodiArea[i].coords = coordinateAree[i].join(",");
    }
    dimensioneFoto = attualeDimensioneFoto;
  } catch (e) {
    alert("gestoreResize " + e);
  }
}
/*cambia il cursore*/
function gestoreCursore() {
  try {
    this.style.cursor = "pointer";
  } catch (e) {
    alert("gestoreCursore " + e);
  }
}
/*array di valori per la mappa*/
var regioni = [
  {
    id: 0,
    src: "imgmappe/0aden.jpg",
    nome: "Aden",
    descrizione:
      "Aden è stata la capitale delle Repubblica democratica popolare dello Yemen fino all'unificazione del paese, nella città è presente il golfo di Aden è un'importante porto per il petrolio del Golfo Persico, che rappresenta 1/5 del totale mondiale.",
  },
  {
    id: 1,
    src: "imgmappe/1amran.jpg",
    nome: "Amaran: Palazzi",
    descrizione:
      "L’intera  città è completamente circondata da mura che risalgono al 1720 per la protezione dei propri confini. ",
  },
  {
    id: 2,
    src: "imgmappe/2abyan.jpg",
    nome: "Abyan: Paesaggio",
    descrizione:
      " La regione storicamente ha fatto parte del sultanato di Faḍlī, un sultanato indipendente della costa meridionale della Penisola araba, fino al 1967.",
  },
  {
    id: 3,
    src: "imgmappe/3al-Dali.jpg",
    nome: "Al-Dali: Casa",
    descrizione: "Al-Dali",
  },
  {
    id: 4,
    src: "imgmappe/4Al-Bayḍa.jpg",
    nome: "Al-Bayda: Tribunale",
    descrizione: "La città ha governato lo Yemen tra il 1494 e il 1590.",
  },
  {
    id: 5,
    src: "imgmappe/5Al-Ḥudaydah.jpg",
    nome: "Al-Ḥudayda: Università",
    descrizione:
      " È una delle città più antiche dello Yemen ed è stata dichiarata Patrimonio dell'Umanità dall'UNESCO dal 1993, in una fazione della regione (Zabid) si trova l'univeristà costruita nel 970 A.C",
  },
  {
    id: 6,
    src: "imgmappe/6Al-Jawf.png",
    nome: "Al-Jawf: Panorma",
    descrizione:
      "La regione è poco abitata a casua del deserto (Rub al-Khali) che non permette l'agrigultura e il comercio.",
  },
  {
    id: 7,
    src: "imgmappe/7Al-Mahra.jpg",
    nome: "Al-Mahra: Montagne",
    descrizione:
      "Da questa regione provengono i migliori dromedari da corsa al mondo.",
  },
  {
    id: 8,
    src: "imgmappe/8Al-Maḥwit.jpg",
    nome: "Al-Maḥwīt: Colline",
    descrizione:
      "Le case nella regione sono state costruite sulle colline per poter fuggire subito in caso di guerra. ",
  },
  {
    id: 9,
    src: "imgmappe/9Sana_a.jpg",
    nome: "Sana'a: Dar al-Hajar",
    descrizione:
      "Il Dar al-Hajar è un ex palazzo realesituato a circa 15 chilometri dalla capitale San'a, costruito negli anni venti come ritiro estivo del sovrano dello Yemen, si trova in cima a una struttura rocciosa.",
  },
  {
    id: 10,
    src: "imgmappe/10Dhamar.jpg",
    nome: "Dhamar: Case in cime alle montagne",
    descrizione:
      "La maggior parte del territorio abitato della città che si trova sopra i 2.500 metri, L'economia di Dhamar è agricola, il teritorio si trova in mezzo ad un altopiano intensamente coltivato dalla popolazione locale. ",
  },
  {
    id: 11,
    src: "imgmappe/11Al-Mukalla.jpg",
    nome: "Ḥaḍramawt:Al-Mukalla",
    descrizione:
      "Nella storia il porto della città è stato il maggior centro commerciale per i traffici tra l'India e l'Africa.",
  },
  {
    id: 12,
    src: "imgmappe/12Hajja.jpg",
    nome: "Hajja: Università antica",
    descrizione:
      "La citta vive del comercio di minerali preziosi come l'oro e il ferro.",
  },
  {
    id: 13,
    src: "imgmappe/13Ibb.jpg",
    nome: "Ibb: Coltivazione di Qat",
    descrizione:
      "Ibb è l'area più umida di tutta la Penisola araba e riceve le precipitazioni monsoniche nel periodo tra aprile ed ottobre, grazie a queste pioggie i terreni sono fertili. ",
  },
  {
    id: 14,
    src: "imgmappe/14lahij.jpg",
    nome: "Lahij: Mango",
    descrizione:
      "Il mango proveniete da Lanij è considerato il migliore in Asia.",
  },
  {
    id: 15,
    src: "imgmappe/15Marib.jpg",
    nome: "Marib: Il trono di Balqis",
    descrizione:
      "Marib nel II millennio a.C. era capitale dell'antico regno di Saba, il tempio è stato dedicato al dio della luna Elm",
  },
  {
    id: 16,
    src: "imgmappe/16Rayma.jpeg",
    nome: "Rayma: Miele",
    descrizione:
      "Il miele provenite dalla città di Rayma è molto chiesto dal mercato Aisiatico per la sua qualità pregiata.",
  },
  {
    id: 17,
    src: "imgmappe/17sada.jpg",
    nome: "Sada: Case distrutte",
    descrizione:
      "Sada è una delle poche regioni dello Yemen abitato da una larga maggioranza di zayditi, una componente minoritaria dell'Islam sciita, da questa città provengono gli Huthi (ribelli) che combattono contro Il governo ufficile per il controllo del paese.",
  },
  {
    id: 18,
    src: "imgmappe/18Shabwa.jpeg",
    nome: "Shabwa: Poliziotti che controllano il porto ",
    descrizione:
      "Shabwa è ricca di grandi quantità di petrolio e gas ma non hanno sviluppo a casua della guerra.",
  },
  {
    id: 19,
    src: "imgmappe/19Taizz.jpg",
    nome: "Taizz:Industria del Caffè",
    descrizione:
      "L'economia di Taizz si basa sul caffè, grazie alla vicinanza della città Mokha",
  },
  {
    id: 20,
    src: "imgmappe/20Socatra.jpg",
    nome: "Socotra: Albero Dracaena drago",
    descrizione:
      "Dal 2008 l'arcipelago di Socotra è inserito tra i patrimoni dell'umanità dell'UNESCO, il 37% delle 825 specie di piante presenti sull'isola sono uniche al mondo, da questo albero si estrae il (sangue di drago), una resina di colore rosso usata nei tempi antichi sia in medicina, come incenso e come colorante.",
  },
];
/*inizializza un nuovo array*/
function nuovoArray(indice) {
  var i = regioni[indice].src;
  var n = regioni[indice].nome;
  var d = regioni[indice].descrizione;
  resetContenuto(n, d, i);
}
/*sostiuisce gli elementi dei nodi*/
function resetContenuto(nome, descrizione, immagine) {
  var nodoTesto = document.createTextNode(nome);
  nodoTito.replaceChild(nodoTesto, nodoTito.firstChild);

  var nodoTesto2 = document.createTextNode(descrizione);
  nodoDescrizione.replaceChild(nodoTesto2, nodoDescrizione.firstChild);

  var nodoImmagine = document.createElement("img");
  nodoRisultato.replaceChild(nodoImmagine, nodoRisultato.lastChild);
  nodoImmagine.setAttribute("src", immagine);
}

/*gestisce il click su un'area della mappa*/
function gestoreClickArea() {
  try {
    nodoImgPlaceholder.style.visibility = "hidden";

    for (var i = 0; i < regioni.length; i++)
      if (regioni[i].id == this.getAttribute("id")) {
        nuovoArray(i);
      }
  } catch (e) {
    alert("gestoreClickArea " + e);
  }
}
