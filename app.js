const startButton = document.getElementById("start");

const PIEDRA = "PIEDRA";
const TIJERA = "TIJERA";
const PAPEL = "PAPEL";

const cpuSelect = function () {
  const randomNum = Math.random();

  if (randomNum < 0.34) {
    return PIEDRA;
  } else if (randomNum < 0.68) {
    return TIJERA;
  } else {
    return PAPEL;
  }
};

const userSelect = function () {
  const choice = prompt(
    `Escoge entre ${PIEDRA}, ${TIJERA} o ${PAPEL}!`
  ).toUpperCase();
  if (choice !== PIEDRA && choice !== TIJERA && choice !== PAPEL) {
    alert("Seleccion incorrecta");
    return PIEDRA;
  }
  return choice;
};

const startGame = function () {
  console.log("Game starting........");
  console.log(cpuSelect());
  console.log(userSelect());
};

startButton.addEventListener("click", startGame);
