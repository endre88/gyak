// 1. feladat
const nums = [3, 4, 9, 6, 2];
const numbers = [];
let divide = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      numbers.push(`${nums[i]}:  osztható`);
    } else {
      numbers.push(`${nums[i]}:  nem osztható`);
    }
  }
};
divide(nums);
document.querySelector(".nums").textContent = numbers;

// 2. feladat
const players = ["Peter", "Kate", "John"];
const playersout = [];

let writer = function (players) {
  for (let i = 0; i < players.length; i++) {
    playersout.push(`${i + 1}. ${players[i]}`);
  }
};
writer(players);
document.querySelector(".players").textContent = playersout;

// 3. feladat
const x = ["", 4, true];
const types = [];
let check = function (x) {
  for (let i = 0; i < x.length; i++) {
    types.push(typeof x[i]);
  }
  //   console.log(types); ctrl+K--> ctrl+C és Ctrl+U
};
check(x);

document.querySelector(".types").textContent = types;

// 4. feladat
const names = [
  "István",
  "Katalin",
  "Attila",
  "Gábor",
  "Péter",
  "Anna",
  "Kitti",
];
let valogato = function (nums) {
  for (let i = 0; i < names.length; i++) {
    if (names[i] == "Gábor") {
      document.querySelector(".names").textContent = `A tömb ${[
        i + 1,
      ]}. eleme ${names[i]}`;
    }
  }
};
valogato(names);

// 5. feladat

const numbs = ["a", "4", 2, 2, 1, 1]; // 10

let adder = function (numbs) {
  let sum = 0;
  for (let i = 0; i < numbs.length; i++) {
    if (!isNaN(numbs[i])) {
      sum = sum + parseInt(numbs[i]);
      document.querySelector(
        ".numbs"
      ).textContent = `A tömb értékeinek összege: ${[sum]}`;
    } else {
      console.log(
        "A tömb legalább egy eleme nem szám, tehát nem konvertálható"
      );
    }
  }
};

adder(numbs);
