// console.dir(_);

// console.log(_.isEmpty({}));
// console.log(_.isEmpty({ a: 1 }));

const user = {
  name: 'Mango',
  //   location: {
  //     cords: [1, 2],
  //     city: 'Kyev',
  //   },
};

// console.log(_.get(user, 'location.city'));

// console.log(user.location.city);

// if (user && user.location && user.location.city) {
//   console.log(user.location.city);
// }

// console.log(user?.location?.city);

// console.log(_.union([1, 2, 3, 4], [3, 5, 6]));

// console.log(_.range(1, 10, 2));

const players = [
  { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
  { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
  { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
  { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
];

const sortBy = _.sortBy(players, ['rank', 'isOnline']);

console.table(sortBy);
