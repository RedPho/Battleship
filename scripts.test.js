import { Ship, Gameboard } from "./scripts.js"; 

test("hit function increments hitpoint", () => {
  let ship = new Ship();
  ship.hit();
  expect(ship.hitpoint).toBe(1); 
})

test("Places carrier", () => {
  let gameboard = new Gameboard()
  gameboard.placeCarrier([1,5], "X");
  expect(gameboard.carrier.coords).toStrictEqual([[1,5], [2,5], [3,5], [4,5], [5,5]]);
})

test("allcoords", () => {
  let gameboard = new Gameboard()
  gameboard.placeCarrier([1,5], "X");
  gameboard.placePatrolBoat([2,6], "Y");
  expect(gameboard.allPlacedCoords).toStrictEqual([[1,5], [2,5], [3,5], [4,5], [5,5], [2,6], [2,7]]);
})

test("Receieve attack", () => {
  let gameboard = new Gameboard();
  gameboard.placeCarrier([1,5], "X");
  gameboard.receiveAttack([1,5]);
  expect(gameboard.carrier.hitpoint).toBe(1)
})

test("All sunk", () => {
  let gameboard = new Gameboard();
  gameboard.placePatrolBoat([2,6], "Y");
  gameboard.receiveAttack([2,6]);
  gameboard.receiveAttack([2,7]);
  expect(gameboard.allSunk()).toBe(true);
})

test("Sunk after receiveAttack", () => {
  let gameboard = new Gameboard();
  gameboard.placePatrolBoat([2,6], "Y");
  gameboard.receiveAttack([2,6]);
  gameboard.receiveAttack([2,7]);
  expect(gameboard.patrolBoat.isSunk()).toBe(true);
})

test("sunk after init", () => {
  let gameboard = new Gameboard();
  expect(gameboard.patrolBoat.isSunk()).toBe(true);
})