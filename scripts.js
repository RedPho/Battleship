function Ship(len = 0, hitpoint = 0, coords = []) {
  function hit() {
    this.hitpoint++;
  }

  function isSunk() {
    return this.hitpoint >= coords.length ? true: false;
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
    allPlacedCoords.push(...carrier.coords);
    return carrier;
  }

  function placeBattleship(startingCoord, axis) {
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
    allPlacedCoords.push(...battleship.coords);
    return battleship;
  }

  function placeDestroyer(startingCoord, axis) {
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
    allPlacedCoords.push(...destroyer.coords);
    return destroyer;
  }

  function placeSubmarine(startingCoord, axis) {
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
    allPlacedCoords.push(...submarine.coords);
    return submarine;
  }

  function placePatrolBoat(startingCoord, axis) {
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
          ships[i].coords.splice(i, 1);
          console.log(patrolBoat);
        }
      }
    }
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
    allSunk
  }
}

function createGameboards() {
  for (let i = 0; i < 100; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("square");
    let gameboards = document.querySelectorAll("gameboard");
    gameboards.forEach((gameboard) => {
      gameboard.appendChild(newDiv);
    })
  }
}

createGameboards();