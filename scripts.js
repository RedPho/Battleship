var phase = "preparation";
let axisDOM = document.getElementById("axis");
let axis = axisDOM.innerText;
let axisContainer = document.querySelector(".axis-container");
let playTitle = document.querySelector(".play-title");
axisDOM.addEventListener("click", () => {
  if (axis == "X") {
    axisDOM.innerText = "Y";
  }
  else {
    axisDOM.innerText = "X";
  }
  axis = axisDOM.innerText;
})


function Ship(len = 0, hitpoint = 0, coords = []) {
  function hit() {
    this.hitpoint++;
  }

  function isSunk() {
    return this.coords.length == 0 ? true: false;
  }

  return {
    len,
    hitpoint,
    hit,
    isSunk,
    coords
  }
}

function Gameboard() {
  let carrier = new Ship(5);
  let battleship = new Ship(4);
  let destroyer = new Ship(3);
  let submarine = new Ship(3);
  let patrolBoat = new Ship(2);
  let clicked = [];
  let allPlacedCoords = [];

  function placeCarrier(startingCoord, axis) {
    if (startingCoord[0] > 9 || startingCoord[1] > 9 || startingCoord[0] < 0 || startingCoord[1] < 0) {
      return;
    }
    if (axis == "X") {
      if (startingCoord[0] > 5) {
        return;
      }
    }
    if (axis == "Y") {
      if (startingCoord[1] > 5) {
        return;
      }
    }

    carrier.coords.push(startingCoord);
    if (axis == "X") {
      for (let i = 1; i < carrier.len; i++) {
        carrier.coords.push([startingCoord[0]+i, startingCoord[1]]);
      }
    }
    if (axis == "Y") {
      for (let i = 1; i < carrier.len; i++) {
        carrier.coords.push([startingCoord[0], startingCoord[1]+i]);
      }
    }
    for (let i = 0; i < allPlacedCoords.length; i++) {
      for (let j = 0; j < carrier.coords.length; j++) {
        if (allPlacedCoords[i][0] == carrier.coords[j][0] && allPlacedCoords[i][1] == carrier.coords[j][1]) {
          carrier.coords = [];
          return
        }
      }
    }
    allPlacedCoords.push(...carrier.coords);
    return carrier;
  }

  function placeBattleship(startingCoord, axis) {
    if (startingCoord[0] > 9 || startingCoord[1] > 9 || startingCoord[0] < 0 || startingCoord[1] < 0) {
      return;
    }
    if (axis == "X") {
      if (startingCoord[0] > 6) {
        return;
      }
    }
    if (axis == "Y") {
      if (startingCoord[1] > 6) {
        return;
      }
    }

    battleship.coords.push(startingCoord);
    if (axis == "X") {
      for (let i = 1; i < battleship.len; i++) {
        battleship.coords.push([startingCoord[0]+i, startingCoord[1]]);
      }
    }
    if (axis == "Y") {
      for (let i = 1; i < battleship.len; i++) {
        battleship.coords.push([startingCoord[0], startingCoord[1]+i]);
      }
    }
    for (let i = 0; i < allPlacedCoords.length; i++) {
      for (let j = 0; j < battleship.coords.length; j++) {
        if (allPlacedCoords[i][0] == battleship.coords[j][0] && allPlacedCoords[i][1] == battleship.coords[j][1]) {
          battleship.coords = [];
          return
        }
      }
    }
    allPlacedCoords.push(...battleship.coords);
    return battleship;
  }

  function placeDestroyer(startingCoord, axis) {
    if (startingCoord[0] > 9 || startingCoord[1] > 9 || startingCoord[0] < 0 || startingCoord[1] < 0) {
      return;
    }
    if (axis == "X") {
      if (startingCoord[0] > 7) {
        return;
      }
    }
    if (axis == "Y") {
      if (startingCoord[1] > 7) {
        return;
      }
    }

    destroyer.coords.push(startingCoord);
    if (axis == "X") {
      for (let i = 1; i < destroyer.len; i++) {
        destroyer.coords.push([startingCoord[0]+i, startingCoord[1]]);
      }
    }
    if (axis == "Y") {
      for (let i = 1; i < destroyer.len; i++) {
        destroyer.coords.push([startingCoord[0], startingCoord[1]+i]);
      }
    }
    for (let i = 0; i < allPlacedCoords.length; i++) {
      for (let j = 0; j < destroyer.coords.length; j++) {
        if (allPlacedCoords[i][0] == destroyer.coords[j][0] && allPlacedCoords[i][1] == destroyer.coords[j][1]) {
          destroyer.coords = [];
          return
        }
      }
    }
    allPlacedCoords.push(...destroyer.coords);
    return destroyer;
  }

  function placeSubmarine(startingCoord, axis) {
    if (startingCoord[0] > 9 || startingCoord[1] > 9 || startingCoord[0] < 0 || startingCoord[1] < 0) {
      return;
    }
    if (axis == "X") {
      if (startingCoord[0] > 7) {
        return;
      }
    }
    if (axis == "Y") {
      if (startingCoord[1] > 7) {
        return;
      }
    }

    submarine.coords.push(startingCoord);
    if (axis == "X") {
      for (let i = 1; i < submarine.len; i++) {
        submarine.coords.push([startingCoord[0]+i, startingCoord[1]]);
      }
    }
    if (axis == "Y") {
      for (let i = 1; i < submarine.len; i++) {
        submarine.coords.push([startingCoord[0], startingCoord[1]+i]);
      }
    }
    for (let i = 0; i < allPlacedCoords.length; i++) {
      for (let j = 0; j < submarine.coords.length; j++) {
        if (allPlacedCoords[i][0] == submarine.coords[j][0] && allPlacedCoords[i][1] == submarine.coords[j][1]) {
          submarine.coords = [];
          return
        }
      }
    }
    allPlacedCoords.push(...submarine.coords);
    return submarine;
  }

  function placePatrolBoat(startingCoord, axis) {
    if (startingCoord[0] > 9 || startingCoord[1] > 9 || startingCoord[0] < 0 || startingCoord[1] < 0) {
      return;
    }
    if (axis == "X") {
      if (startingCoord[0] > 8) {
        return;
      }
    }
    if (axis == "Y") {
      if (startingCoord[1] > 8) {
        return;
      }
    }

    patrolBoat.coords.push(startingCoord);
    if (axis == "X") {
      for (let i = 1; i < patrolBoat.len; i++) {
        patrolBoat.coords.push([startingCoord[0]+i, startingCoord[1]]);
      }
    }
    if (axis == "Y") {
      for (let i = 1; i < patrolBoat.len; i++) {
        patrolBoat.coords.push([startingCoord[0], startingCoord[1]+i]);
      }
    }
    for (let i = 0; i < allPlacedCoords.length; i++) {
      for (let j = 0; j < patrolBoat.coords.length; j++) {
        if (allPlacedCoords[i][0] == patrolBoat.coords[j][0] && allPlacedCoords[i][1] == patrolBoat.coords[j][1]) {
          patrolBoat.coords = [];
          return
        }
      }
    }
    allPlacedCoords.push(...patrolBoat.coords);
    return patrolBoat;
  }

  
  let hitted = [];

  function receiveAttack(coord) {
    clicked.push(coord);
    let ships = [carrier, battleship, destroyer, submarine, patrolBoat]
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < ships[i].coords.length; j++) {
        if (ships[i].coords[j][0] == coord[0] && ships[i].coords[j][1] == coord[1]) {
          ships[i].hit();
          hitted.push(coord);
          ships[i].coords.splice(j, 1);
          console.log(ships[i]);
          return true;
        }
      }
    }
    return false;
  }

  function allSunk() {
    let ships = [carrier, battleship, destroyer, submarine, patrolBoat]
    for (let i = 0; i < ships.length; i++) {
      if (!ships[i].isSunk()) {
        return false;
      }
    }
    return true;
  }

  function placeShipsInUI() {
    let ships = [carrier, battleship, destroyer, submarine, patrolBoat];
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < ships[i].coords.length; j++) {
        let placedSquare = document.getElementById(`p${ships[i].coords[j][0]}${ships[i].coords[j][1]}`)
        placedSquare.classList.add("placed");
      }
    }
  }

  return {
    carrier,
    battleship,
    destroyer,
    submarine,
    patrolBoat,
    placeCarrier,
    placeBattleship,
    placeDestroyer,
    placeSubmarine,
    placePatrolBoat,
    clicked,
    allPlacedCoords,
    receiveAttack,
    hitted,
    allSunk,
    placeShipsInUI
  }
}

let playerBoard = new Gameboard();
let computerBoard = new Gameboard();

function createGameboardsDOM() {
  let computerChoices = []
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      computerChoices.push([i, j]);
    }
  }
  let playerBoardUI = document.querySelector(".player-gameboard");
  let computerBoardUI = document.querySelector(".computer-gameboard");
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let newComputerDiv = document.createElement("div");
      newComputerDiv.classList.add("square");
      newComputerDiv.classList.add("c");
      newComputerDiv.setAttribute("id", `c${j}${i}`);
      let newPlayerDiv = document.createElement("div");
      newPlayerDiv.classList.add("square");
      newPlayerDiv.classList.add("p");
      newPlayerDiv.setAttribute("id", `p${j}${i}`);
      let defaultBC = newPlayerDiv.style.backgroundColor;
      let next1;
      let next2;
      let next3;
      let next4;
      
      newPlayerDiv.addEventListener("mouseover", () => {
        if (axis == "X") {
          next1 = document.getElementById(`p${j+1}${i}`);
          next2 = document.getElementById(`p${j+2}${i}`);
          next3 = document.getElementById(`p${j+3}${i}`);
          next4 = document.getElementById(`p${j+4}${i}`);
        }
        else {
          next1 = document.getElementById(`p${j}${i+1}`);
          next2 = document.getElementById(`p${j}${i+2}`);
          next3 = document.getElementById(`p${j}${i+3}`);
          next4 = document.getElementById(`p${j}${i+4}`);
        }
        if (next1) {
          next1defaultBC = next1.style.backgroundColor;
        }
        if (next2) {
          next2defaultBC = next2.style.backgroundColor;
        }
        if (next3) {
          next3defaultBC = next3.style.backgroundColor;
        }
        if (next4) {
          next4defaultBC = next4.style.backgroundColor;
        }
        

        if (playerBoard.carrier.coords.length == 0) {
          if (axis == "X" && j > 5 || axis == "Y" && i > 5) {
            return;
          }
          newPlayerDiv.style.backgroundColor = "#C9EEFF";
          next1.style.backgroundColor = "#C9EEFF";
          next2.style.backgroundColor = "#C9EEFF";
          next3.style.backgroundColor = "#C9EEFF";
          next4.style.backgroundColor = "#C9EEFF";
        }
        else if (playerBoard.battleship.coords.length == 0) {
          if (axis == "X" && j > 6 || axis == "Y" && i > 6) {
            return;
          }
          newPlayerDiv.style.backgroundColor = "#C9EEFF";
          next1.style.backgroundColor = "#C9EEFF";
          next2.style.backgroundColor = "#C9EEFF";
          next3.style.backgroundColor = "#C9EEFF";
        }
        else if (playerBoard.destroyer.coords.length == 0) {
          if (axis == "X" && j > 7 || axis == "Y" && i > 7) {
            return;
          }
          newPlayerDiv.style.backgroundColor = "#C9EEFF"
          next1.style.backgroundColor = "#C9EEFF";
          next2.style.backgroundColor = "#C9EEFF";
        }
        else if (playerBoard.submarine.coords.length == 0) {
          if (axis == "X" && j > 7 || axis == "Y" && i > 7) {
            return;
          }
          newPlayerDiv.style.backgroundColor = "#C9EEFF"
          next1.style.backgroundColor = "#C9EEFF";
          next2.style.backgroundColor = "#C9EEFF";
        }
        else if (playerBoard.patrolBoat.coords.length == 0) {
          if (axis == "X" && j > 8 || axis == "Y" && i > 8) {
            return;
          }
          newPlayerDiv.style.backgroundColor = "#C9EEFF"
          next1.style.backgroundColor = "#C9EEFF";
        }
      })
      newPlayerDiv.addEventListener("mouseout", () => {
        newPlayerDiv.style.backgroundColor = defaultBC;
        if (next1) {
          next1.style.backgroundColor = next1defaultBC;
        }
        if (next2) {
          next2.style.backgroundColor = next2defaultBC;
        }
        if (next3) {
          next3.style.backgroundColor = next3defaultBC;
        }
        if (next4) {
          next4.style.backgroundColor = next4defaultBC;
        }
      })
      newPlayerDiv.addEventListener("click", () => {
        if (phase == "preparation") {
          if (playerBoard.carrier.coords.length == 0) {
            playerBoard.placeCarrier([j, i], axis);
            playerBoard.placeShipsInUI();
          }
          else if (playerBoard.battleship.coords.length == 0) {
            playerBoard.placeBattleship([j, i], axis);
            playerBoard.placeShipsInUI();
          }
          else if (playerBoard.destroyer.coords.length == 0) {
            playerBoard.placeDestroyer([j, i], axis);
            playerBoard.placeShipsInUI();
          }
          else if (playerBoard.submarine.coords.length == 0) {
            playerBoard.placeSubmarine([j, i], axis);
            playerBoard.placeShipsInUI();
          }
          else if (playerBoard.patrolBoat.coords.length == 0) {
            playerBoard.placePatrolBoat([j, i], axis);
            playerBoard.placeShipsInUI();
            phase = "play";
            axisContainer.hidden = true;
            playTitle.hidden = false;
          }
        }
      })
      newComputerDiv.addEventListener("click", () => {
        if (phase == "play") {
          for (let k = 0; k < computerBoard.clicked.length; k++) {
            if (computerBoard.clicked[k][0] == j && computerBoard.clicked[k][1] == i) {
              return;
            }
          }
          newComputerDiv.classList.add("clicked");
          if (computerBoard.receiveAttack([j,i])) {
            newComputerDiv.classList.add("hit");
          }
          if(computerBoard.allSunk()) {
            alert("You Win! Reflesh the page to play again.");
            phase = "end";
          }
          let randomIndex = Math.floor(Math.random()*computerChoices.length);
          let computerChoice = computerChoices[randomIndex];
          computerChoices.splice(randomIndex, 1);
          let computerChoiceSquare = document.getElementById(`p${computerChoice[0]}${computerChoice[1]}`);
          computerChoiceSquare.classList.add("clicked");
          if (playerBoard.receiveAttack(computerChoice)) {
            computerChoiceSquare.classList.add("hit");
          }
          if (playerBoard.allSunk()) {
            alert("Computer Wins :( Reflesh the page to try again.");
            phase = "end";
          }
        }
      })
      
      computerBoardUI.appendChild(newComputerDiv);
      playerBoardUI.appendChild(newPlayerDiv);
    }
  }
}

function placeShipsRandomForComputer() {
  while (computerBoard.carrier.coords.length == 0) {
    let j = Math.floor(Math.random()*10);
    let i = Math.floor(Math.random()*10);
    computerBoard.placeCarrier([j, i], axis);
  }
  while (computerBoard.battleship.coords.length == 0) {
    let j = Math.floor(Math.random()*10);
    let i = Math.floor(Math.random()*10);
    computerBoard.placeBattleship([j, i], axis);
  }
  while (computerBoard.destroyer.coords.length == 0) {
    let j = Math.floor(Math.random()*10);
    let i = Math.floor(Math.random()*10);
    computerBoard.placeDestroyer([j, i], axis);
  }
  while (computerBoard.submarine.coords.length == 0) {
    let j = Math.floor(Math.random()*10);
    let i = Math.floor(Math.random()*10);
    computerBoard.placeSubmarine([j, i], axis);
  }
  while (computerBoard.patrolBoat.coords.length == 0) {
    let j = Math.floor(Math.random()*10);
    let i = Math.floor(Math.random()*10);
    computerBoard.placePatrolBoat([j, i], axis);
  }
  console.log(computerBoard.submarine.coords);
}

createGameboardsDOM();
placeShipsRandomForComputer()