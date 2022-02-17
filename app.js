const startButton = document.getElementById("start");

const PIEDRA = "PIEDRA";
const TIJERA = "TIJERA";
const PAPEL = "PAPEL";

const RESULT_DRAW = "EMPATADO";
const RESULT_WINNER = "GANADO";
const RESULT_LOSER = "PERDIDO";

let game_running = false;

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

const checkInputIsNull = function (uInput) {
  if (uInput === null) return true;
};

const playerSelect = function () {
  let choice;
  try {
    choice = prompt(
      `Escoge entre ${PIEDRA}, ${TIJERA} o ${PAPEL}!`
    ).toUpperCase();
  } catch (error) {
    alert(`${error} Error en la seleccion `);
    return playerSelect();
  }

  if (choice !== PIEDRA && choice !== TIJERA && choice !== PAPEL) {
    alert("Seleccion incorrecta");
    return playerSelect();
  }
  return choice;
};

const printResult = (cSelect, pSelect, result) => {
  alert(
    `La IA escogió ${cSelect}, y tu has escogido ${pSelect}. con lo cual has ${result}!!`
  );
  return;
};

const getWinner = function (cSelect, pSelect) {
  let result;
  if (cSelect === pSelect) {
    result = RESULT_DRAW;
  } else if (
    (cSelect === PIEDRA && pSelect === TIJERA) ||
    (cSelect === PAPEL && pSelect === PIEDRA) ||
    (cSelect === TIJERA && pSelect === PAPEL)
  ) {
    result = RESULT_LOSER;
  } else {
    result = RESULT_WINNER;
  }
  return result;
};

const startGame = function () {
  if (!game_running) {
    console.log("Game starting........");
    game_running = true;

    const cpuChoice = cpuSelect();
    const playerChoice = playerSelect();
    const winner = getWinner(cpuChoice, playerChoice);

    printResult(cpuChoice, playerChoice, winner);
    game_running = false;
  }
};

startButton.addEventListener("click", startGame);
