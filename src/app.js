/* eslint-disable */
import "./style.css";

window.onload = () => {
  //write your code here
  //document.getElementById("card").classList.add(generadorPalosPoker());
  document.getElementById("boton").addEventListener("click", () => {
    // Obtención de palo y de numero
    let palo = generadorPalosPoker();
    let numero = generadorNumerosPoker();

    //Definicion del color en funcion del palo
    let color = null; // inicializar la variable sin valor
    if (palo == "♦" || palo == "♥") {
      color = "style='color:red;'"; // la variable adquiere el texto de estilo para rojo
    } else {
      color = "style='color:black;'"; // la variable adquiere el texto de estilo para negro
    }

    // Construccion del html
    document.getElementById("card").innerHTML =
      "<p class= 'numArriba'" +
      color +
      ">" +
      numero +
      "</p>" +
      "<p class= 'paloArriba'" +
      color +
      ">" +
      palo +
      "</p>" +
      "<div class= 'recuadro'>" +
      "<p class= 'numero'" +
      color +
      ">" +
      numero +
      "</p>" +
      "</div>" +
      "<p class= 'paloAbajo'" +
      color +
      ">" +
      palo +
      "</p>" +
      "<p class= 'numAbajo'" +
      color +
      ">" +
      numero +
      "</p>";
  });

  console.log(document.getElementById("card"));
  console.log(generadorPalosPoker());
};

const generadorPalosPoker = () => {
  let palos = ["♦", "♥", "♣", "♠"];
  let indicePalos = Math.floor(Math.random() * palos.length);
  return palos[indicePalos];
};

const generadorNumerosPoker = () => {
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indiceNumeros = Math.floor(Math.random() * numeros.length);

  return numeros[indiceNumeros];
};
