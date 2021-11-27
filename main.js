const $ = (selector) => document.querySelector(selector);
const btn = $("#iniciar");
const parrafo = $("#parrafo");

const hablar = () => {
  const ofensas = [
    "mierda",
    "cabro",
    "pendejo",
    "cachudo",
    "ctm",
    "marica",
    "maricon",
  ];

  //instancia del speech
  const utterance = new SpeechSynthesisUtterance();
  utterance.lang = "es-PE";

  //converti a minuscula todo el texto
  const juntar = parrafo.value.split(" ").join("").toLowerCase();

  //buscando malas palabras
  for (let i = 0; i <= ofensas.length; i++) {
    if (juntar.includes(ofensas[i])) {
      console.log(juntar.includes(ofensas[i]));
      utterance.text = "tu texto incluye malas palabras";
      speechSynthesis.speak(utterance);
      return;
    }
  }
  utterance.text = parrafo.value;

  //ejecucion de la voz
  speechSynthesis.speak(utterance);
};
btn.addEventListener("click", hablar);
