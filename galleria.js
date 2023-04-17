/* il seguente codice è stato prelevato dalle dispense fornite dal professor Ambriola
e modificate da me a seguito del progetto*/

/*variabili globali*/
var nodoIndietro;
var nodoAvanti;
var numerofoto = 7;
var nodoFoto;
var indicefoto;
/*gestoreload*/
function gestoreLoad() {
  try {
    nodoIndietro = document.getElementById("ind");
    nodoAvanti = document.getElementById("avan");
    nodoFoto = document.getElementById("foto");
    nodoIndietro.onclick = gestoreIndietro;
    nodoAvanti.onclick = gestoreAvanti;
    indicefoto = 0;
    cambiaFoto(0);
  } catch (e) {
    alert("gestoreLoad " + e);
  }
}
window.onload = gestoreLoad;
/*cambia foto scorrendo l'array*/
function cambiaFoto(x) {
  indicefoto += x;
  if (indicefoto >= numerofoto) indicefoto = 0;
  if (indicefoto < 0) indicefoto = numerofoto - 1;
  nodoFoto.setAttribute("src", galleria[indicefoto].immagine);
}
/*gestore bottone avanti*/
function gestoreAvanti() {
  try {
    cambiaFoto(1);
  } catch (e) {
    alert("gestoreAvanti " + e);
  }
}
/*gestore bottone indietro*/
function gestoreIndietro() {
  try {
    cambiaFoto(-1);
  } catch (e) {
    alert("gestoreIndietro " + e);
  }
}
/*array di src per immagini*/
var galleria = [
  {
    immagine: "imggalleria/1.jpg"
  },
  {
    immagine: "imggalleria/2.jpg"
  },
  {
    immagine: "imggalleria/3.png"
  },
  {
    immagine: "imggalleria/4.jpg"
  },
  {
    immagine: "imggalleria/5.jpg"
  },
  {
    immagine: "imggalleria/6.jpg"
  },
  {
    immagine: "imggalleria/7.jpeg"
  }
];
