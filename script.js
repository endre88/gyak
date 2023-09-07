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

const players = ["Peter", "Kate", "John"];
const playersout = [];

let writer = function (players) {
  for (let i = 0; i < players.length; i++) {
    playersout.push(`${i + 1}. ${players[i]}`);
  }
};
writer(players);
document.querySelector(".players").textContent = playersout;

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
