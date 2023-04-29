// const add = (a, b) => a + b;

// console.log(add(5,10));

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number) {
//   console.log(number);
// });

// const doubledNums = numbers.map(function (number) {
//   console.log(number);

//   return number * 2;
// });

// console.log(doubledNums);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const playersName = players.map((player) => player.name);

console.log(playersName);

const playersIds = players.map((player) => player.id);

console.log(playersIds);

const updatedPlayers = players.map((player) => ({
  ...player,
  points: player.points * 1.1,
}));

console.log(updatedPlayers);

const playerIdToUpdate = 'player-3';

// const playerIdUpdate = players.map((player) => {
//   console.log(player.id);
//   if (playerIdToUpdate === player.id) {
//     console.log('find');

//     return { ...player, timePlayed: player.timePlayed + 100 };
//   }

//   return player;
// });

const playerIdUpdate = players.map((player) =>
  playerIdToUpdate === player.id
    ? { ...player, timePlayed: player.timePlayed + 50 }
    : player
);

console.log(playerIdUpdate);
